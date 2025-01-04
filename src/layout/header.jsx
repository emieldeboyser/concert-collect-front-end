import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../auth/logout";

const Header = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  return (
    <header className="bg-blue pl-36 flex justify-between items-center h-20 px-10">
      <h1
        className="text-white text-header font-bold cursor-pointer"
        onClick={() => navigate("/")} // Navigate to the home page
      >
        GigList
      </h1>
      <div className="flex gap-5">
        <button
          className="text-white font-semibold"
          onClick={() => navigate("/venues")} // Navigate to the home page
        >
          Venues
        </button>
        <button
          className="text-white font-semibold"
          onClick={() => navigate("/venues/add")} // Navigate to the home page
        >
          Add venue
        </button>
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
