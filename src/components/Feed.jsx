import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ConcertCard from "./cards/ConcertCard";
import AddEntry from "./addEntry";
import FilterButton from "./buttons/filter";
import { useTranslation } from "react-i18next";

const Feed = () => {
  const server = process.env.REACT_APP_API_URL;
  const [data, setData] = useState([]);
  const selectRef = useRef(null);
  const [filter, setFilter] = useState({ sortBy: "date", order: "DESC" });
  const { t } = useTranslation();

  // Get data from the server
  const fetchData = async () => {
    const { sortBy, order } = filter;
    axios
      .post(
        `${server}/api/concerts?sortBy=${sortBy}&order=${order}`,
        {}, // Body is empty, but the headers are included
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("Data fetched:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Fetch data whenever the filter changes
  useEffect(() => {
    fetchData();
  }, [filter]);

  const handleSelectChange = (event) => {
    const [sortBy, order] = event.target.value.split("_");
    setFilter({ sortBy, order });
  };

  return (
    <div>
      <h2 className="text-3xl text-lightblue pb-5">{t("yourConcerts")}:</h2>
      <FilterButton onClick={handleSelectChange} selectRef={selectRef} />
      <div className="flex flex-wrap gap-10">
        <AddEntry />
        {data.map((concert) => (
          <ConcertCard
            key={concert.id}
            id={concert.id}
            title={concert.artist}
            place={concert.venue_name}
            location={concert.country}
            cost={concert.price}
            date={concert.date}
            image={concert.image_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
