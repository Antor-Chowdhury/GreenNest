import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";
const NavBar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("SignOut Successful!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

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
    <div className="bg-linear-to-r from-[#264839] to-[#8dab7d]">
      <div className="shadow-sm py-4">
        <div className="navbar max-w-11/12 mx-auto pb-20 md:pb-0">
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
                className="menu menu-sm dropdown-content bg-linear-to-r from-[#264839] to-[#8dab7d] rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
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

          {/* login / logout conditional rendering */}

          {user ? (
            <div className="navbar-end flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={handleSignOut}
                className="btn text-white bg-[#d5b60a] border-none shadow-none px-4 py-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-end">
              <Link
                to="/login"
                className="btn text-lg text-white bg-[#d5b60a] border-none shadow-none"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
