import axios from "axios";

const getStats = async () => {
  try {
    const server = process.env.REACT_APP_API_URL;
    const response = await axios.get(server + "/api/stats");
    return response.data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
};

export default getStats;
