import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

const ForgetPass = () => {
  const { email } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        window.open("https://mail.google.com/mail/u/0/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="my-20 flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-3 py-3">
        <div className="card-body"></div>
        <form onSubmit={handleSubmit} className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input
            defaultValue={email}
            name="email"
            type="email"
            className="input w-full"
            placeholder="Email"
            required
          />
          <button className="btn btn-neutral mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
