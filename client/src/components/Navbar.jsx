import React, { useEffect, useState } from 'react';
import logo from "../images/logo.svg";
import { Link, useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';
import { MdLightMode } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { api_base_url } from '../helper';
import { HashLink } from 'react-router-hash-link'

const Navbar = ({ isGridLayout, setIsGridLayout }) => {

  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // DROPDOWN STATE
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);

      fetch(api_base_url + "/getUserDetails", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: localStorage.getItem("userId")
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setData(data.user);
          } else {
            setError(data.message);
          }
        });
    }

  }, []);

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);

    window.location.reload();
  };

  return (
    <>
      <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414] text-white">

        {/* Logo */}
        <div className="logo">
          <img
            onClick={() => navigate("/")}
            className='w-[150px] cursor-pointer'
            src={logo}
            alt="logo"
          />
        </div>

        {/* Links */}
        <div className="links flex items-center gap-6">

          <Link to="/">Home</Link>
          <HashLink smooth to="/#about">
            About
          </HashLink>
          <Link to="/docs">Documents</Link>
           <HashLink smooth to="/#services">
            Services
          </HashLink>
          <HashLink smooth to="/#contacts">
            Contacts
          </HashLink>
         

          {/* If NOT Logged In */}
          {!isLoggedIn ? (
            <div className='flex items-center gap-3 ml-5'>

              <button
                onClick={() => navigate("/login")}
                className='px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300'
              >
                Login
              </button>

              <button
                onClick={() => navigate("/signup")}
                className='px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300'
              >
                Sign Up
              </button>

            </div>
          ) : (

            /* If Logged In */
            <div className='relative'>

              {/* Avatar */}
              <Avatar
                onClick={() => setShowDropdown(!showDropdown)}
                name={data ? data.name : "U"}
                size="40"
                round="50%"
                className='cursor-pointer ml-2'
              />

              {/* Dropdown */}
              <div
                className={`absolute right-0 top-[55px] shadow-lg shadow-black/50 p-[10px] rounded-lg bg-[#1A1919] w-[170px] z-50 ${showDropdown ? "block" : "hidden"
                  }`}
              >

                <div className='py-[10px] border-b border-gray-600'>
                  <h3
                    onClick={() => navigate("/homep")}
                    className='text-[17px] cursor-pointer text-white'
                    style={{ lineHeight: 1 }}
                  >
                    {data ? data.name : "User"}
                  </h3>
                </div>

                {/* Light Mode */}
                <div
                  className='flex items-center gap-2 mt-3 mb-2 cursor-pointer text-white'
                >
                  <MdLightMode className='text-[20px]' />
                  Light Mode
                </div>

                {/* Grid/List Toggle */}
                <div
                  onClick={() => setIsGridLayout(!isGridLayout)}
                  className='flex items-center gap-2 mt-3 mb-3 cursor-pointer text-white'
                >
                  <BsGridFill className='text-[20px]' />
                  {isGridLayout ? "List" : "Grid"} Layout
                </div>

                {/* Logout */}
                <button
                  onClick={logout}
                  className='w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg text-white'
                >
                  Logout
                </button>

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;