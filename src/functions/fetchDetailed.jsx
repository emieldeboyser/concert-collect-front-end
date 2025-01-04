import axios from "axios";

const fetchDetail = async (id) => {
  const server = process.env.REACT_APP_API_URL;

  try {
    const response = await axios.get(`${server}/api/concerts/${id}`, {
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

export default fetchDetail;
