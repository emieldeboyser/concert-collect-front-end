import React, { useState, useEffect } from "react";
import getCall from "../../functions/get/getCall";
import Header from "../../layout/header";
import VenueCard from "../../components/cards/VenueCard";

const Feedvenues = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get data from the server
  const fetchData = async () => {
    try {
      const data = await getCall("/api/venues");
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching venues:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleted = () => {
    fetchData();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <h2 className="text-3xl text-lightblue pb-5">All venues:</h2>
      <div className="flex flex-wrap gap-10">
        {data && Array.isArray(data) ? (
          data.map((venue) => (
            <VenueCard
              id={venue.id}
              title={venue.name}
              location={venue.location}
              place={venue.city}
              deleted={deleted}
            />
          ))
        ) : (
          <p>No venues available</p>
        )}
      </div>
    </div>
  );
};

export default Feedvenues;
