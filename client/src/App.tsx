import { Route, BrowserRouter as Router, Routes,Navigate } from "react-router-dom"
import Land from "./Landing"
import EditorPage from "./pages/EditorPage"
import HomePage from "./pages/HomePage"

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Editior from './pages/Editior';
import DocumentationPage from "./pages/DocumentationPage"
import ApplicationServices from "./pages/ApplicationServices";

const App = () => {
     let isLoggedIn = localStorage.getItem("isLoggedIn");
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Land />} />
                    
                    <Route path="/group" element={<HomePage />} />
                    <Route path="/docs" element={< DocumentationPage/>} />
                    <Route path="/ApplicationServices" element={< ApplicationServices/>} />
                    <Route path="/editor/:roomId" element={<EditorPage />} />
                    <Route path='/homep' element={isLoggedIn ? <Home /> : <Navigate to="/login"/>} />
                    <Route path='/signUp' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/editior/:projectID' element={isLoggedIn ? <Editior /> : <Navigate to="/login"/>} />
                    <Route path="*" element={isLoggedIn ? <NoPage />: <Navigate to="/login"/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
