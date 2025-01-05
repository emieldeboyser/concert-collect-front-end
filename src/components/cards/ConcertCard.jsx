import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetchImage from "./../../functions/fetchImage";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ConcertCard = ({ id, title, place, cost, image, location, date }) => {
  const [t] = useTranslation();
  const [pic, setPic] = useState(null);
  const navigate = useNavigate();
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
    };
    data();
  }, [image]);

  return (
    <div
      className="concert-card border-2 flex flex-col w-[250px] h-2/5 rounded-standardT overflow-hidden"
      onClick={() => navigate(`/concert/${id}`)}
    >
      <img
        src={pic}
        alt={`${title} poster`}
        className="h-[250px] w-full roundend-t-standardT object-cover"
      />
      <div className="concert-card__details p-5 bg-lightblue text-white">
        <h2 className="concert-card__title text-name font-semibold text-nowrap text-ellipsis overflow-hidden">
          {title}
        </h2>
        <p className="concert-card__place font-light	">
          {place}, {location}
        </p>
        <div className="flex justify-between gap-15">
          <p className="concert-card__cost font-bold">{formattedDate}</p>
          <p className="concert-card__cost font-bold">{t(cost)}</p>
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
