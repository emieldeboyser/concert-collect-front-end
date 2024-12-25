import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCirclePlus } from "react-icons/fa6";
import fetchVenues from "../functions/fetchVenues";
import checkIfNullValues from "../functions/checkIfNullValues";

const AddEntry = ({ onClose, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);
  const server = process.env.REACT_APP_API_URL;
  const [alert, setAlert] = useState("");
  const [loadingVenues, setLoadingVenues] = useState(true); // Added for loading state
  const [concert, setConcert] = useState({
    image: "",
    artist: "",
    cost: "",
    location: "",
    date: "",
  });
  const [venues, setVenues] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch venues with async/await
  useEffect(() => {
    const loadVenues = async () => {
      try {
        const data = await fetchVenues(); // Await fetching venues
        console.log("Data:", data); // Debugging log
        setVenues(data || []); // Adjust according to API structure
        console.log("Venues loaded:", data);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    loadVenues();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConcert({
      ...concert,
      [name]: value,
    });
  };

  useEffect(() => {
    if (venues.length > 0) {
      setLoadingVenues(false); // Stop loading
    }
  }, [venues]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected image:", file);
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Concert:", concert);
    const fout = checkIfNullValues(concert);

    if (fout) {
      setAlert("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("artist", concert.artist);
    formData.append("cost", concert.cost);
    formData.append("location", concert.location);
    formData.append("date", concert.date);
    formData.append("image", selectedImage);

    axios
      .post(`${server}/api/concerts/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Concert added successfully", res.data);
        setAlert("Concert added successfully");
        setOpen(false);
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error adding concert:", err);
        setAlert("Error adding concert");
      });
  };

  return (
    <>
      {open ? (
        <div className="bg-gray-100 p-5 rounded-standardT w-1/3">
          <div className="w-full flex items-center justify-between">
            <div className="flex-1 flex justify-center">
              <h1 className="font-bold text-xl">Add new concert</h1>
            </div>
            <button
              className="bg-red-500 text-white p-3 rounded-standardT font-bold"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-2 pt-5"
          >
            <div className="flex items-center w-full gap-5">
              <label className="w-1/3">Image:</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="rounded-lg text-black p-2 w-2/3"
                accept="image/*"
              />
            </div>
            <div className="flex items-center w-full gap-5">
              <label className="w-1/3">Artist:</label>
              <input
                type="text"
                name="artist"
                value={concert.artist}
                onChange={handleChange}
                className="rounded-lg text-black p-2 w-2/3"
                placeholder="Artist"
              />
            </div>
            <div className="flex items-center w-full gap-5">
              <label className="w-1/3">Cost:</label>
              <input
                type="text"
                name="cost"
                value={concert.cost}
                onChange={handleChange}
                className="rounded-lg text-black p-2 w-2/3"
                placeholder="Cost"
              />
            </div>
            <div className="flex items-center w-full gap-5">
              <label className="w-1/3">Location:</label>
              {loadingVenues ? (
                <p>Loading venues...</p>
              ) : (
                <select
                  name="location"
                  value={concert.location}
                  onChange={handleChange}
                  className="rounded-lg text-black p-2 w-2/3"
                >
                  <option value="" disabled>
                    Select a location
                  </option>
                  {venues.length === 0 ? (
                    <option>No venues found</option>
                  ) : (
                    venues.map((venue) => {
                      return (
                        <option key={venue.id} value={venue.id}>
                          {venue.name}
                        </option>
                      );
                    })
                  )}
                </select>
              )}
            </div>
            <div className="flex items-center w-full gap-5 pb-5">
              <label className="w-1/3">When:</label>
              <input
                type="date"
                name="date"
                value={concert.date}
                onChange={handleChange}
                className="rounded-lg text-black p-2 w-2/3"
                max={new Date().toISOString().split("T")[0]}
              />
            </div>
            {alert && <p className="text-red-500">{alert}</p>}
            <button
              type="submit"
              className="bg-blue text-white p-5 rounded-standardT font-bold w-1/2 hover:bg-purple-700"
            >
              Add Concert
            </button>
          </form>
        </div>
      ) : (
        <div
          className="bg-gray-100 p-5 rounded-standardT w-1/3 flex items-center justify-center"
          onClick={() => setOpen(true)}
        >
          <FaCirclePlus size={"50px"} color="#1985E7" />
        </div>
      )}
    </>
  );
};

export default AddEntry;
