import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);

  //   console.log(user);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        // console.log(userCredential.user);
        setUser({ ...user, photoURL: photoUrl, displayName: name });
      })
      .catch((err) => {
        toast.error(err.message);
      });

    toast.success("Profile updated Successfully!");

    // clear the form
    e.target.reset();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="avatar mt-5">
        <div className="w-24 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <p className="font-medium text-lg mt-5">Name: {user?.displayName}</p>
      <p className="mb-3">Email: {user?.email}</p>

      <button onClick={handleOpenForm} className="btn mb-5">
        Update Profile
      </button>
      {isOpen && (
        <form onSubmit={handleUpdate} className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input
            defaultValue={user?.displayName}
            name="name"
            type="text"
            className="input"
            placeholder="Your name"
            required
          />

          {/* PhotoUrl */}
          <label className="label">Photo URL</label>
          <input
            defaultValue={user?.photoURL}
            name="photoUrl"
            type="text"
            className="input"
            placeholder="Your URL"
            required
          />
          <button className="btn btn-neutral mt-4 mb-3">Update Profile</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
