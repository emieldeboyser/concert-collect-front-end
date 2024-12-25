import axios from "axios";

const fetchImage = async (image) => {
  const server = process.env.REACT_APP_API_URL;

  try {
    console.log("Fetching venues...");
    const url = `${server}/api/${image}`;

    // Extract and return data
    console.log("Image loaded:", url);
    return url;
  } catch (error) {
    // console.error("Error fetching venues:", error);
    throw error; // Re-throw error if needed
  }
};

export default fetchImage;
