import React, { useState } from 'react';
import logo from "../images/logo.svg";
import { useLocation } from 'react-router-dom';
import { api_base_url } from '../helper';

const AuthPage = () => {

  const location = useLocation();

  const [isLogin, setIsLogin] = useState(
    location.state?.isLogin || false
  );

  // Signup States
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  // Common States
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  // Login
  const loginUser = (e) => {
    e.preventDefault();

    fetch(api_base_url + "/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password: pwd
      })
    })
      .then(res => res.json())
      .then(data => {

        if (data.success) {

          localStorage.setItem("token", data.token);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userId", data.userId);

          window.location.href = "/homep";

        } else {
          setError(data.message);
        }
      });
  };

  // Signup
  const signupUser = (e) => {
    e.preventDefault();

    fetch(api_base_url + "/signUp", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        name,
        email,
        password: pwd
      })
    })
      .then(res => res.json())
      .then(data => {

        if (data.success) {

          alert("Account created successfully");
          setIsLogin(true);

        } else {
          setError(data.message);
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      {/* Navbar */}
      <div className="h-[85px] bg-white border-b flex items-center justify-between px-12">

        {/* Logo */}
        <img className='w-[170px]' src={logo} alt="" />

        {/* Toggle */}
        <div className="w-[280px] h-[55px] border border-[#c7d2e5] rounded-full flex items-center p-1 bg-white">

          <button
            onClick={() => {
              setIsLogin(false);
              setError("");
            }}
            className={`
              w-1/2 h-full rounded-full text-[18px] font-semibold transition-all duration-300
              ${!isLogin
                ? "bg-[#3d73d8] text-white"
                : "text-[#3d73d8] bg-transparent"
              }
            `}
          >
            Sign up
          </button>

          <button
            onClick={() => {
              setIsLogin(true);
              setError("");
            }}
            className={`
              w-1/2 h-full rounded-full text-[18px] font-semibold transition-all duration-300
              ${isLogin
                ? "bg-[#3d73d8] text-white"
                : "text-[#3d73d8] bg-transparent"
              }
            `}
          >
            Login
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center mt-12">

        <div className="w-[450px]">

          {/* Heading */}
          <h1 className="text-[42px] font-bold text-center text-[#132144] mb-10">

            {isLogin
              ? "Log in to your existing profile"
              : "Join CodeChef to start coding"
            }

          </h1>

          {/* Google Button */}
          <button className="w-full h-[65px] bg-[#edf3ff] rounded-xl text-[#3d73d8] text-[24px] font-medium mb-10 hover:bg-[#dfe9ff] transition-all duration-300">
            Continue with Google
          </button>

          {/* OR */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-gray-400 font-semibold">OR</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Form */}
          <form onSubmit={isLogin ? loginUser : signupUser}>

            {/* Signup Inputs */}
            {!isLogin && (
              <>
                <input
                  required
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-[68px] border border-gray-300 rounded-xl px-5 text-[20px] outline-none mb-7 bg-white"
                />

                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-[68px] border border-gray-300 rounded-xl px-5 text-[20px] outline-none mb-7 bg-white"
                />
              </>
            )}

            {/* Email */}
            <input
              required
              type="email"
              placeholder={isLogin ? "Username or Email" : "Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[68px] border border-gray-300 rounded-xl px-5 text-[20px] outline-none mb-7 bg-white"
            />

            {/* Password */}
            <input
              required
              type="password"
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className="w-full h-[68px] border border-gray-300 rounded-xl px-5 text-[20px] outline-none mb-4 bg-white"
            />

            {/* Terms */}
            {!isLogin && (
              <div className="flex items-center gap-3 mb-7">
                <input type="checkbox" className="w-5 h-5" />

                <p className="text-[15px] text-gray-500">
                  I agree to Terms and Privacy Policy.
                </p>
              </div>
            )}

            {/* Error */}
            <p className='text-red-500 text-[15px] mb-4'>
              {error}
            </p>

            {/* Submit */}
            <button className="w-full h-[68px] bg-[#7fa7f2] hover:bg-[#6f98e8] rounded-xl text-white text-[24px] font-semibold transition-all duration-300">

              {isLogin ? "LOGIN" : "REGISTER"}

            </button>

            {/* Forgot Password */}
            {isLogin && (
              <p className="mt-5 text-[#3d73d8] text-[18px] cursor-pointer">
                Forgot Password?
              </p>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;