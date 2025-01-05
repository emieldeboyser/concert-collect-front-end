import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AddVenueForm = ({ venueData }) => {
  const { t } = useTranslation();
  // Destructure venueData here
  const [venue, setVenue] = useState({
    name: "",
    type: "",
    city: "",
    country: "",
  });

  const handleChange = (event) => {
    setVenue({ ...venue, [event.target.name]: event.target.value });
    venueData(venue); // Call venueData with the current state
  };

  return (
    <form className="flex flex-col items-center gap-2 pt-5">
      <div className="flex items-center w-full gap-5">
        <label className="w-1/3">{t("name")}:</label>
        <input
          type="text"
          name="name"
          className="rounded-lg text-black p-2 w-2/3"
          placeholder={t("name")}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center w-full gap-5">
        <label className="w-1/3">{t("type")}:</label>
        <input
          type="text"
          name="type"
          className="rounded-lg text-black p-2 w-2/3"
          placeholder={t("type")}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center w-full gap-5">
        <label className="w-1/3">{t("city")}:</label>
        <input
          type="text"
          name="city"
          className="rounded-lg text-black p-2 w-2/3"
          placeholder={t("city")}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center w-full gap-5 pb-5">
        <label className="w-1/3">{t("country")}:</label>
        <input
          type="text"
          name="country"
          className="rounded-lg text-black p-2 w-2/3"
          placeholder={t("country")}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default AddVenueForm;
