import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/header";
import fetchDetail from "../functions/fetchDetailed";
import fetchImage from "../functions/fetchImage";
import formatDate from "../functions/formatDate";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "./../components/breadCrumbs";
import { FaPen } from "react-icons/fa";
import MyMapComponent from "./../components/map/Map";
import SpotifyButton from "../components/buttons/spotify";
import getAccessToken from "../functions/get/getSpotifyAccesToken";
import getSpotifyArtists from "../functions/get/getSpotifyArtists";
import openSpotifyArtist from "../functions/get/getSpotifyArtist";
import StarRating from "../components/buttons/stars";

const DetailedConcert = () => {
  const { id } = useParams();
  const [concert, setConcert] = useState(null);
  const [error, setError] = useState(null);
  const [pic, setPic] = useState(null);
  const breadcrumbs = useBreadcrumbs();
  const { latitude = 0, longitude = 0 } = concert || {};

  const fetchConcert = async () => {
    try {
      const concertData = await fetchDetail(id);
      console.log("Concert data:", concertData);
      setConcert(concertData);
      const concertPhoto = await fetchImage(concertData.image_path);
      setPic(concertPhoto);
    } catch (err) {
      console.error("Error fetching concert data:", err);
      setError("Failed to load concert details.");
    }
  };

  useEffect(() => {
    fetchConcert();
  }, [id]);

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     try {
  //       const token = await getAccessToken();
  //       const artists = await getSpotifyArtists(token, "roxy dekker");
  //     } catch (err) {
  //       console.error("Error fetching Spotify token:", err);
  //     }
  //   };
  //   fetchToken();
  // }, []);

  const renderLocationName = () => {
    if (concert.venue_name && concert.city && concert.country) {
      return `${concert.venue_name}, ${concert.city}, ${concert.country}`;
    } else {
      return "No venue specified";
    }
  };

  // Display a loading or error message
  if (error) return <p>{error}</p>;
  if (!concert) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="mx-36 mt-2 bg-[#E1F1FF] rounded-lg p-[15px] relative">
        <div className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer">
          <FaPen color="black" />
        </div>
        <h1 className="text-[50px] text-blue font-bold pt-2">
          {concert.artist}
        </h1>
        <div className="flex gap-[100px]">
          <img
            src={pic}
            alt={concert.artist}
            className="h-[500px] w-[500px] object-cover"
          />
          <div className="border-l-[6px] pl-[100px] border-l-white flex flex-col gap-5 justify-between">
            <p className="text-blue font-bold">{renderLocationName()}</p>
            <MyMapComponent lat={concert.latitude} long={concert.longitude} />
            <div className="flex gap-[100px] items-center justify-between">
              <SpotifyButton link={concert.spotify_link} />
              {concert.price == 0 ? <p>Free entry</p> : <p>€{concert.price}</p>}
            </div>
            <div className="flex gap-5 items-center justify-between">
              <StarRating totalStars={concert.rating} />
              <p className="font-black text-blue">{formatDate(concert.date)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedConcert;
