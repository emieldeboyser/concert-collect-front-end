import React, { useState } from "react";

const AddVenueForm = ({ venueData }) => {
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
        <label className="w-1/3">Name:</label>
        <input
          type="text"
          name="name"
          className="rounded-lg text-black p-2 w-2/3"
          placeholder="Venue Name"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center w-full gap-5">
        <label className="w-1/3">Type:</label>
        <input
          type="text"
          name="type"
          className="rounded-lg text-black p-2 w-2/3"
          placeholder="Venue Type"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center w-full gap-5">
        <label className="w-1/3">City:</label>
        <input
          type="text"
          name="city"
          className="rounded-lg text-black p-2 w-2/3"
          placeholder="City"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center w-full gap-5 pb-5">
        <label className="w-1/3">Country:</label>
        <input
          type="text"
          name="country"
          className="rounded-lg text-black p-2 w-2/3"
          placeholder="Country"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default AddVenueForm;
