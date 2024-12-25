import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetchImage from "../functions/fetchImage";

const ConcertCard = ({ title, place, cost, image, location, date }) => {
  const [pic, setPic] = useState(null);
  const [loading, setLoading] = useState(true);
  // format date
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    const data = async () => {
      const concertPhoto = await fetchImage(image);
      setPic(concertPhoto);
      setLoading(false);
    };
    data();
  }, [image]);

  return (
    <div className="concert-card border-2 flex flex-col w-1/5 h-2/5 rounded-standardT overflow-hidden">
      <img
        src={pic}
        alt={`${title} poster`}
        className="h-2/5 h-1/2 w-full roundend-t-standardT object-cover"
      />
      <div className="concert-card__details p-5 bg-lightblue text-white">
        <h2 className="concert-card__title text-name font-semibold">{title}</h2>
        <p className="concert-card__place font-light	">
          {place}, {location}
        </p>
        <div className="flex justify-between gap-15">
          <p className="concert-card__cost font-bold">{formattedDate}</p>
          {cost === 0 ? (
            <p className="concert-card__cost font-bold">Free</p>
          ) : (
            <p className="concert-card__cost font-bold">€{cost}</p>
          )}
        </div>
      </div>
    </div>
  );
};

ConcertCard.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};

export default ConcertCard;
