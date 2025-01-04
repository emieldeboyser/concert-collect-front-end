import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import deleteCall from "../../functions/delete/deleteCall";

const VenueCard = ({
  id,
  title,
  place,
  cost,
  image,
  location,
  date,
  deleted,
}) => {
  const deleteVenue = async () => {
    try {
      const data = await deleteCall(`/api/venues/${id}`);
      deleted(data);
    } catch (error) {
      console.error("Error delet  ing venue:", error);
    }
  };
  return (
    <div className="concert-card border-2 flex flex-col w-[250px] h-2/5 rounded-standardT overflow-hidden relative">
      <div className="concert-card__details p-5 bg-lightblue text-white">
        <h2 className="concert-card__title text-name font-semibold">{title}</h2>
        <p className="concert-card__place font-light	">{location}</p>
        <div className="absolute top-5 right-5">
          <FaTrashAlt color="red" onClick={deleteVenue} />
        </div>
      </div>
    </div>
  );
};

VenueCard.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};

export default VenueCard;
