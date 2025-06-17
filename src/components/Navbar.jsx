import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthProvider';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdOutlineHistoryEdu } from "react-icons/md";



const Navbar = () => {
const{user,logOut}=use(AuthContext);
const [dropdownOpen, setDropdownOpen] = useState(false);


const handleLogOut=()=>{
  // console.log('usertrying')
  logOut()
  .then(()=>{
    // alert('your logged out successful')
    Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'User logout successfully'
              });

  })
  .catch((error)=>{
    console.log(error)
  })
}



const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);




    return (
        
        <div className="navbar sticky top-0 z-50 p-0 bg-base-100 shadow-sm px-8 md:px-12 lg:px-16 xl:px-24 mb-4">
        <div className="navbar-start">
          {/* <div>{user&&user.email}</div> */}
          <div className="dropdown">
            <div tabIndex={0} className="cursor-pointer mr-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-pink-800" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-pink-800" : "")}
                  to="/addArtifacts"
                >
                  Add Artifacts
                </NavLink>
              </li>
              <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-800 underline" : "")}
                to="/allArtifacts"
              >
                All Artifacts
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-800 underline" : "")}
                to="/aboutUs"
              >
              About Us
              </NavLink>
            </li>



            </ul>
          </div>
<div className='flex'>
  <span className='text-4xl text-pink-500'><MdOutlineHistoryEdu /></span>

          <h2 className="text-3xl font-extrabold  bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Artifactum 
        </h2>
        </div>

        </div>
  
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-800 underline" : "")}
                to="/"
              >
               <span className='font-bold text-pink-600'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-800 underline" : "")}
                to="/addArtifacts"
              >
              <span className='font-bold text-pink-600'>Add Artifacts</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-800 underline" : "")}
                to="/allArtifacts"
              >
                 <span className='font-bold text-pink-600'>All Artifacts</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-pink-800 underline" : "")}
                to="/aboutUs"
              >
              <span className='font-bold text-pink-600'>About Us</span>
              </NavLink>
            </li>


          </ul>
        </div>

       <div className="navbar-end flex gap-2">

 {
          user ? (
            <div className="relative">
              <img
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-12 h-12 object-cover rounded-full cursor-pointer border border-pink-300"
                src={user.photoURL || ''}
                alt="user"
              />
              {
                dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow z-50">
                    <div className="px-4 py-2  text-pink-600  font-semibold border-b">{user.displayName}</div>
                    <ul className="flex flex-col text-sm">
                      <li>
                        <Link to="/myArtifacts" className="px-4 py-2  font-semibold text-pink-600 hover:bg-gray-100">My Artifacts</Link>
                      </li>
                      <li>
                        <Link to="/likedArtifactsPage" className="px-4 py-2  font-semibold text-pink-600 hover:bg-gray-100">Liked Artifacts</Link>
                      </li>
                      <li>
                        <button onClick={handleLogOut} className="px-4 py-2 text-left hover:bg-gray-100  font-semibold text-pink-600 w-full">Logout</button>
                      </li>
                    </ul>
                  </div>
                )
              }
            </div>
          ) : (
            <Link to="/login" className="btn btn-secondary cursor-pointer rounded">Login</Link>
          )
        }

<button onClick={toggleTheme}>{isDark?<FaMoon></FaMoon>:<FaSun/>}</button>

      </div> 

        </div>
        
    );
};

export default Navbar;














{/* 
<img className='w-12 rounded-full' src={`${user ? user.photoURL:" "}`} alt=""/>
{ user?(<button onClick={handleLogOut} className=' btn btn-secondary rounded'>LogOut</button>):

(<Link to='/login' className="btn  md:block lg:block btn-secondary rounded">login</Link>)} */}
