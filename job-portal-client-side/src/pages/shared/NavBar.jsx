import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";

export default function NavBar() {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log("sign out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to=''>Item 2</NavLink>
      </li>
      {user && 
      <li>
        <NavLink>Item 3</NavLink>
      </li> }
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
       <div>  
        <img src="../../assets/icons8-job-application-100.png" alt="" /></div>
        <a className="btn btn-ghost text-xl">Job Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            {" "}
            <Link to="/register">Register</Link>
            <Link to="/signin" className="btn">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
