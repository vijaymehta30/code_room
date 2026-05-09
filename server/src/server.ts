import express, { Response, Request } from "express"
import dotenv from "dotenv"
import http from "http"
import cors from "cors"
import { SocketEvent, SocketId } from "./types/socket"
import { USER_CONNECTION_STATUS, User } from "./types/user"
import { Server } from "socket.io"
import path from "path"
import { exec } from "child_process"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// FIXED STATIC PATH
app.use(express.static(path.join(__dirname, "..", "public")))

const server = http.createServer(app)

const io = new Server(server, {
	cors: {
		origin: "*",
	},
	maxHttpBufferSize: 1e8,
	pingTimeout: 60000,
})

let userSocketMap: User[] = []

function getUsersInRoom(roomId: string): User[] {
	return userSocketMap.filter((user) => user.roomId === roomId)
}

function getRoomId(socketId: SocketId): string | null {
	const roomId = userSocketMap.find(
		(user) => user.socketId === socketId
	)?.roomId

	if (!roomId) {
		console.error("Room ID is undefined for socket ID:", socketId)
		return null
	}

	return roomId
}

function getUserBySocketId(socketId: SocketId): User | null {
	const user = userSocketMap.find((user) => user.socketId === socketId)

	if (!user) {
		console.error("User not found for socket ID:", socketId)
		return null
	}

	return user
}

// SOCKET CONNECTION
io.on("connection", (socket) => {
	console.log("===================================")
	console.log("Client Connected:", socket.id)
	console.log("===================================")

	// JOIN ROOM
	socket.on(SocketEvent.JOIN_REQUEST, ({ roomId, username }) => {
		console.log("JOIN_REQUEST RECEIVED")
		console.log("Room ID:", roomId)
		console.log("Username:", username)

		const isUsernameExist = getUsersInRoom(roomId).filter(
			(u) => u.username === username
		)

		if (isUsernameExist.length > 0) {
			console.log("USERNAME ALREADY EXISTS")

			io.to(socket.id).emit(SocketEvent.USERNAME_EXISTS)

			return
		}

		const user: User = {
			username,
			roomId,
			status: USER_CONNECTION_STATUS.ONLINE,
			cursorPosition: 0,
			typing: false,
			socketId: socket.id,
			currentFile: null,
			selectionStart: 0,
			selectionEnd: 0,
		}

		userSocketMap.push(user)

		console.log("USER ADDED SUCCESSFULLY")
		console.log(user)

		socket.join(roomId)

		console.log(`Socket joined room: ${roomId}`)

		socket.broadcast.to(roomId).emit(SocketEvent.USER_JOINED, {
			user,
		})

		const users = getUsersInRoom(roomId)

		io.to(socket.id).emit(SocketEvent.JOIN_ACCEPTED, {
			user,
			users,
		})
	})


	socket.on(SocketEvent.RUN_CODE, ({ code }) => {
	exec(`node -e "${code}"`, (error, stdout, stderr) => {
		if (error) {
			io.to(socket.id).emit(SocketEvent.CODE_OUTPUT, {
				output: error.message,
			})
			return
		}

		if (stderr) {
			io.to(socket.id).emit(SocketEvent.CODE_OUTPUT, {
				output: stderr,
			})
			return
		}

		io.to(socket.id).emit(SocketEvent.CODE_OUTPUT, {
			output: stdout,
		})
	})
})
	// DISCONNECT
	socket.on("disconnect", () => {
		console.log("===================================")
		console.log("Client Disconnected:", socket.id)
		console.log("===================================")
	})

	socket.on("disconnecting", () => {
		const user = getUserBySocketId(socket.id)

		if (!user) return

		const roomId = user.roomId

		socket.broadcast
			.to(roomId)
			.emit(SocketEvent.USER_DISCONNECTED, { user })

		userSocketMap = userSocketMap.filter(
			(u) => u.socketId !== socket.id
		)

		socket.leave(roomId)
	})

	// SEND MESSAGE
	socket.on(SocketEvent.SEND_MESSAGE, ({ message }) => {
		console.log("MESSAGE RECEIVED:", message)

		const roomId = getRoomId(socket.id)

		if (!roomId) return

		socket.broadcast
			.to(roomId)
			.emit(SocketEvent.RECEIVE_MESSAGE, { message })
	})

	// FILE UPDATE
	socket.on(SocketEvent.FILE_UPDATED, ({ fileId, newContent }) => {
		console.log("FILE UPDATED:", fileId)

		const roomId = getRoomId(socket.id)

		if (!roomId) return

		socket.broadcast.to(roomId).emit(SocketEvent.FILE_UPDATED, {
			fileId,
			newContent,
		})
	})

	// CURSOR MOVE
	socket.on(
		SocketEvent.CURSOR_MOVE,
		({ cursorPosition, selectionStart, selectionEnd }) => {
			const roomId = getRoomId(socket.id)

			if (!roomId) return

			userSocketMap = userSocketMap.map((user) => {
				if (user.socketId === socket.id) {
					return {
						...user,
						cursorPosition,
						selectionStart,
						selectionEnd,
					}
				}

				return user
			})

			const user = getUserBySocketId(socket.id)

			if (!user) return

			socket.broadcast.to(roomId).emit(
				SocketEvent.CURSOR_MOVE,
				{
					user,
				}
			)
		}
	)

	// TYPING START
	socket.on(
		SocketEvent.TYPING_START,
		({ cursorPosition, selectionStart, selectionEnd }) => {
			const roomId = getRoomId(socket.id)

			if (!roomId) return

			userSocketMap = userSocketMap.map((user) => {
				if (user.socketId === socket.id) {
					return {
						...user,
						typing: true,
						cursorPosition,
						selectionStart,
						selectionEnd,
					}
				}

				return user
			})

			const user = getUserBySocketId(socket.id)

			if (!user) return

			socket.broadcast.to(roomId).emit(
				SocketEvent.TYPING_START,
				{
					user,
				}
			)
		}
	)

	// TYPING PAUSE
	socket.on(SocketEvent.TYPING_PAUSE, () => {
		const roomId = getRoomId(socket.id)

		if (!roomId) return

		userSocketMap = userSocketMap.map((user) => {
			if (user.socketId === socket.id) {
				return {
					...user,
					typing: false,
				}
			}

			return user
		})

		const user = getUserBySocketId(socket.id)

		if (!user) return

		socket.broadcast.to(roomId).emit(
			SocketEvent.TYPING_PAUSE,
			{
				user,
			}
		)
	})
})

// ROOT ROUTE
app.get("/", (req: Request, res: Response) => {
	res.sendFile(
		path.join(__dirname, "..", "public", "index.html")
	)
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
	console.log("===================================")
	console.log(`SERVER RUNNING ON PORT ${PORT}`)
	console.log(`http://localhost:${PORT}`)
	console.log("===================================")
})