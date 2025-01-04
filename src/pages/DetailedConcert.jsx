import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/header";
import fetchDetail from "../functions/fetchDetailed";
import fetchImage from "../functions/fetchImage";
import formatDate from "../functions/formatDate";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "./../components/breadCrumbs";
import { FaPen, FaTrash } from "react-icons/fa";
import MyMapComponent from "./../components/map/Map";
import SpotifyButton from "../components/buttons/spotify";
import StarRating from "../components/buttons/stars";
import deleteCall from "../functions/delete/deleteCall";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import lightbox styles

const DetailedConcert = () => {
  const { id } = useParams();
  const [concert, setConcert] = useState(null);
  const [error, setError] = useState(null);
  const [pic, setPic] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // For lightbox state
  const breadcrumbs = useBreadcrumbs();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const deleteConcert = async () => {
    try {
      const data = await deleteCall(`/api/concerts/${id}`);
      console.log("Concert deleted:", data);
      window.location.href = "/";
    } catch (err) {
      console.error("Error deleting concert:", err);
      setError("Failed to delete concert.");
    }
  };

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
        <div className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer flex gap-2">
          <FaPen color="black" />
          <FaTrash color="red" onClick={deleteConcert} />
        </div>
        <h1 className="text-[50px] text-blue font-bold pt-2">
          {concert.artist}
        </h1>
        <div className="flex gap-[100px]">
          {/* Only show image if it's loaded */}
          {pic ? (
            <img
              src={pic}
              alt={concert.artist}
              className="h-[500px] w-[500px] object-cover cursor-pointer"
              onClick={() => setIsOpen(true)} // Open lightbox on click
            />
          ) : (
            <div>Loading image...</div> // Loading placeholder for the image
          )}
          <div className="border-l-[6px] pl-[100px] border-l-white flex flex-col gap-5 justify-between">
            <p className="text-blue font-bold">{renderLocationName()}</p>
            <MyMapComponent lat={concert.latitude} long={concert.longitude} />
            <div className="flex gap-[100px] items-center justify-between">
              <SpotifyButton link={concert.spotify_link} />
              {concert.price === 0.0 ? (
                <p>Free entry</p>
              ) : (
                <p>€{concert.price}</p>
              )}
            </div>
            <div className="flex gap-5 items-center justify-between">
              <StarRating totalStars={concert.rating} />
              <p className="font-black text-blue">{formatDate(concert.date)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for image */}
      {isOpen && pic && (
        <Lightbox
          mainSrc={pic} // Single image, no gallery
          onCloseRequest={() => setIsOpen(false)} // Close lightbox
        />
      )}
    </>
  );
};

export default DetailedConcert;
