import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>login</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Your Full Name"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Photo-URL */}
              <label className="label">Email</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your photoURL"
                required
              />

              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>

              <div className="mt-2">
                <span>
                  Already have an Account?
                  <Link className="text-blue-700 font-medium" to="/login">
                    {" "}
                    Sign in
                  </Link>
                </span>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
