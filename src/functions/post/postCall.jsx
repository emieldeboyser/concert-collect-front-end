import axios from "axios";

const postCall = async (route, data) => {
  const server = process.env.REACT_APP_API_URL;

  try {
    console.log("Making POST request to", route, "with data", data);
    const response = await axios.post(server + route, data);
    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

export default postCall;
