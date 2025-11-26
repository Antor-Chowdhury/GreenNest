import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Register = () => {
  const { register, user, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    console.log(email, password, name, photoUrl);

    register(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            // console.log(userCredential.user);
            setUser(userCredential.user);
          })
          .catch((err) => {
            toast.error(err.message);
          });

        toast.success("Registration successful!");

        // clear the form
        e.target.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  console.log(user);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>login</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your Full Name"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Photo-URL */}
              <label className="label">Photo URL</label>
              <input
                name="photoUrl"
                type="text"
                className="input"
                placeholder="Enter your photoURL"
                required
              />

              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
