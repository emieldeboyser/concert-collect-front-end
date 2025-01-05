import { useTranslation } from "react-i18next";
import Form from "../../components/form/Form";
import AddVenueForm from "../../components/form/forms/addVenueForm";
import postCall from "../../functions/post/postCall";
import Header from "../../layout/header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddVenue = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [venue, setVenue] = useState({});
  const handleDataChange = (venue) => {
    setVenue(venue);
  };

  const handleSubmit = async () => {
    try {
      const data = await postCall("/api/venues/add", venue);
      console.log("Data:", data);
      if (data.message === "Venue added successfully") {
        navigate("/venues");
      }
    } catch (error) {
      console.error("Error adding venue:", error);
    }
  };
  return (
    <div>
      <Header />
      <Form
        title={t("addVenue")}
        form={<AddVenueForm venueData={handleDataChange} />}
        handleSubmit={handleSubmit}
        onClose={() => navigate("/venues")}
      />
    </div>
  );
};

export default AddVenue;
