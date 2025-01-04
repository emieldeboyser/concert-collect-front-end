import React, { useEffect, useState } from "react";
import Header from "./../layout/header";
import LoginButton from "../auth/login";
import { useNavigate } from "react-router-dom";
import getStats from "../functions/get/getStats";
import fetchImage from "../functions/fetchImage";

const Home = () => {
  const navigate = useNavigate();
  const user = "Emiel";
  const count = 3;
  const openConcerts = () => {
    navigate("/concert");
  };
  const [stats, setStats] = useState({});

  useEffect(() => {
    const data = async () => {
      try {
        const res = await getStats();
        setStats(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    data();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="p-5">
        <h1>Welcome {user},</h1>
        <div className="flex h-[70vh] gap-[50px]">
          <div
            className="bg-[#E1F2FF] flex rounded-2xl w-1/2 justify-center align-center items-center text-center"
            onClick={openConcerts}
          >
            <h1 className="text-4xl">See concerts</h1>
          </div>
          <div className="flex flex-col w-full gap-[50px]">
            <div className="bg-[#E1F2FF] rounded-2xl w-full h-full p-2">
              <h2>Your last few concerts:</h2>
              <div className="flex flex-col gap-2">
                {stats.last_concerts &&
                  stats.last_concerts.map((concert, index) => {
                    let img;

                    if (concert.image_path) {
                      img = concert.image_path;
                    }

                    const fetchImg = async () => {
                      try {
                        const concertPhoto = await fetchImage(img);
                        console.log("Concert photo:", concertPhoto);
                        return concertPhoto;
                      } catch (error) {
                        console.error("Error fetching image:", error);
                      }
                    };

                    img = fetchImg();

                    return (
                      <img
                        src={img}
                        alt={concert.artist}
                        className="h-[50px] w-[50px] object-cover"
                      />
                    );
                  })}
              </div>
            </div>
            <div className="bg-blue rounded-2xl w-full h-full text-white p-2">
              <h2>
                U went to <strong>{stats.totalConcerts}</strong> concerts
                already!
              </h2>
              <h2>
                U went to <strong>{stats.different_venues}</strong> different
                venues! And your favorite venue is:{" "}
                <strong>{stats.most_popular_venue}</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
