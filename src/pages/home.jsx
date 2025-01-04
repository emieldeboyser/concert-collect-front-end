import React, { useEffect, useState } from "react";
import Header from "./../layout/header";
import LoginButton from "../auth/login";
import { useNavigate } from "react-router-dom";
import getStats from "../functions/get/getStats";
import fetchImage from "../functions/fetchImage";
import { Trans, useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = "Emiel";
  const count = 3;
  const openConcerts = () => {
    navigate("/concert");
  };
  const [stats, setStats] = useState({});
  const [concertImages, setConcertImages] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await getStats();
        setStats(res);
        console.log(res);

        // Fetch concert images once the stats are loaded
        const fetchedImages = await Promise.all(
          res.last_concerts.map(async (concert) => {
            if (concert.image_path) {
              try {
                const concertPhoto = await fetchImage(concert.image_path);
                return concertPhoto;
              } catch (error) {
                console.error(
                  "Error fetching image for concert:",
                  concert,
                  error
                );
                return null; // Return null if there's an error fetching the image
              }
            }
            return null; // No image path available
          })
        );
        setConcertImages(fetchedImages);
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
        <h1 className="text-[40px] text-blue">
          {t("welcome")} {user},
        </h1>
        <div className="flex h-[70vh] gap-[50px]">
          <div
            className="bg-[#E1F2FF] flex rounded-2xl w-1/2 justify-center align-center items-center text-center"
            onClick={openConcerts}
          >
            <h1 className="text-4xl">{t("seeConcerts")}</h1>
          </div>
          <div className="flex flex-col w-full gap-[50px]">
            <div className="bg-[#E1F2FF] rounded-2xl w-full h-full">
              <div className="flex overflow-hidden rounded-2xl">
                {stats.last_concerts &&
                  stats.last_concerts.map((concert, index) =>
                    concertImages[index] ? (
                      <img
                        src={concertImages[index]}
                        alt={concert.artist}
                        className="h-[250px] w-[2000px] object-cover"
                        onClick={() => navigate(`/concert/${concert.id}`)}
                        key={concert.id}
                      />
                    ) : (
                      <div className="h-[50px] w-[50px] bg-gray-200" />
                    )
                  )}
              </div>
            </div>
            <div className="bg-blue rounded-2xl w-full h-full text-white p-2 flex flex-row gap-5">
              <div>
                <h2>
                  <Trans
                    i18nKey="lastConcerts"
                    values={{ count: stats.totalConcerts }}
                  />
                </h2>
                <h2>
                  <Trans
                    i18nKey="visitedVenues"
                    values={{ count: stats.different_venues }}
                  />
                </h2>
                <h2>
                  <Trans
                    i18nKey="favoriteVenues"
                    values={{ count: stats.most_popular_venue }}
                  />
                </h2>
              </div>

              {stats.concerts_per_year && (
                <div>
                  <h2 className="mb-2 text-xl font-medium">
                    {t("concertsPerYear")}
                  </h2>
                  <ul>
                    {Object.entries(stats.concerts_per_year).map(
                      ([year, count]) => (
                        <li key={year}>
                          <Trans
                            i18nKey={
                              count === 1
                                ? "yearConcerts.one"
                                : "yearConcerts.other"
                            }
                            values={{ year, count }}
                          />
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
