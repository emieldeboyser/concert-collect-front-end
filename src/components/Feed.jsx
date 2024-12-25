import React, { useEffect, useState } from "react";
import axios from "axios";
import ConcertCard from "./ConcertCard";
import AddEntry from "./addEntry";

const Feed = () => {
  const server = process.env.REACT_APP_API_URL;
  const name = "Emiel";
  const [data, setData] = useState([]);
  // Get data from the server
  const fetchData = async () => {
    axios
      .post(
        `${server}/api/concerts`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // run the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="font-medium text-blue text-header">Welkom {name},</h1>
      <h2 className="text-3xl text-lightblue pb-5">Your collection:</h2>
      <div className="flex flex-wrap gap-10">
        {data.map((concert) => (
          <ConcertCard
            key={concert.id}
            title={concert.artist}
            place={concert.venue_name}
            location={concert.country}
            cost={concert.price}
            date={concert.date}
            image={concert.image_path}
          />
        ))}
        <AddEntry />
      </div>
    </div>
  );
};

export default Feed;
