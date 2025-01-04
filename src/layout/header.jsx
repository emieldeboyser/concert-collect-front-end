import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const { t, i18n } = useTranslation();

  const changeLocale = () => {
    i18n.changeLanguage(i18n.language === "en" ? "nl" : "en");
  };

  return (
    <header className="bg-blue flex justify-between items-center h-20 px-5">
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
          {t("venues")}
        </button>
        <button
          className="text-white font-semibold"
          onClick={() => navigate("/venues/add")} // Navigate to the home page
        >
          {t("addVenues")}
        </button>
        <button onClick={changeLocale}>{i18n.language}</button>
      </div>
    </header>
  );
};

export default Header;
