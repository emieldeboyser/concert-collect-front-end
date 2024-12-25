import axios from "axios";

const fetchVenues = async () => {
  const server = process.env.REACT_APP_API_URL;

  try {
    console.log("Fetching venues...");
    const response = await axios.get(`${server}/api/venues`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Extract and return data
    return response.data;
  } catch (error) {
    // console.error("Error fetching venues:", error);
    throw error; // Re-throw error if needed
  }
};

export default fetchVenues;
