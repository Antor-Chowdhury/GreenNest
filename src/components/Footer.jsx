import React from "react";
import { Link } from "react-router";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/profile">My Profile</Link>
      <Link to="#">About Us</Link>
      <Link to="#">Contact</Link>
      <Link to="#">FAQs</Link>
      <Link to="#">Privacy Policy</Link>
    </>
  );
  return (
    <div className="flex flex-col items-center justify-center bg-linear-to-r from-[#264839] to-[#8dab7d] text-white pt-20 pb-10 text-center px-2.5 mt-10">
      <Link to="/" className="flex items-center gap-1">
        <h1 className="text-lg md:text-2xl font-bold">
          🌱 <span className="text-yellow-500">G</span>reenNest
        </h1>
      </Link>
      <p className="my-5 max-w-3xl">
        GreenNest is your trusted destination for indoor plants, offering expert
        care tips and a curated selection of beautiful greenery. We make it easy
        to create a healthy, refreshing living space with plants that thrive
        indoors.
      </p>
      <div className="flex items-center justify-center gap-10 flex-wrap mb-5">
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <FaXTwitter />
        </a>
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <RiInstagramFill />
        </a>
      </div>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {links}
      </div>
      <hr className="w-full h-2 text-white mt-8 mb-2" />
      <p>© 2025 GreenNest. All rights reserved.</p>
    </div>
  );
};

export default Footer;
