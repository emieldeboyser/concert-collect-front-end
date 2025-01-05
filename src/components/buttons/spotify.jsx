import React from "react";
import { useTranslation } from "react-i18next";
import { FaSpotify } from "react-icons/fa";

const SpotifyButton = ({ link }) => {
  const { t } = useTranslation();
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white p-2 rounded-lg flex items-center gap-2 justify-between pl-5 w-full cursor-pointer"
    >
      <FaSpotify color="#1DB954" />
      <button className="spotify-button text-[#1DB954] font-bold">
        {t("spotify")}
      </button>
    </a>
  );
};

export default SpotifyButton;
