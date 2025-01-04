import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="flex items-center gap-1">
      {stars.map((_, index) => (
        <FaStar
          key={index}
          color={index < totalStars ? "#024D8A" : "#A7C6E0"}
        />
      ))}
    </div>
  );
};

export default StarRating;
