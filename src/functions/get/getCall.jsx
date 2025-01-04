import axios from "axios";

const getCall = async (route) => {
  const server = process.env.REACT_APP_API_URL;

  try {
    console.log("Making GET request to", route, "with data");
    const response = await axios.get(server + route);
    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

export default getCall;
