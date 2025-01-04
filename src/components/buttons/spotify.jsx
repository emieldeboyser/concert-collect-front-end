import React from "react";
import { FaSpotify } from "react-icons/fa";

const SpotifyButton = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white p-2 rounded-lg flex items-center gap-2 justify-between pl-5 w-full cursor-pointer"
    >
      <FaSpotify color="#1DB954" />
      <button className="spotify-button text-[#1DB954] font-bold">
        Listen on Spotify
      </button>
    </a>
  );
};

export default SpotifyButton;
