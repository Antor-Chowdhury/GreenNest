import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router";
const NavBar = () => {
  const links = (
    <>
      <NavLink to="/">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#ffda03] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            Home
          </span>
        )}
      </NavLink>
      <NavLink to="/plants">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#ffda03] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            Plants
          </span>
        )}
      </NavLink>
      <NavLink to="/profile">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#ffda03] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            My Profile
          </span>
        )}
      </NavLink>
    </>
  );
  return (
    <div className="shadow-sm bg-linear-to-r from-[#264839] to-[#8dab7d] mb-10">
      <div className="navbar bg-linear-to-r from-[#264839] to-[#8dab7d] max-w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="mr-2 btn-ghost lg:hidden"
            >
              <FaBars className="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center justify-center gap-1">
            <figure className="md:w-8 md:h-8"></figure>
            <h1 className="md:text-2xl gradient-text font-bold text-white">
              🌱 <span className="text-yellow-500">G</span>reenNest
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-10 menu-horizontal px-1 text-lg">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-lg text-white bg-[#d5b60a] border-none shadow-none">
            <span className="sm:block">Login</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
