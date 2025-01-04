import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

const MyMapComponent = ({ lat = 1, long = 1 }) => {
  // Initialize the state directly with parsed lat and long as numbers
  const [location] = useState([parseFloat(lat), parseFloat(long)]);

  return (
    <Map height={300} width={450} defaultCenter={location} defaultZoom={15}>
      <Marker
        anchor={location}
        payload={1}
        onClick={({ event, anchor, payload }) => {
          // Handle marker click if needed
        }}
      />
    </Map>
  );
};

export default MyMapComponent;
