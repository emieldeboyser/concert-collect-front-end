import axios from "axios";

const deleteCall = async (route) => {
  const server = process.env.REACT_APP_API_URL;

  try {
    console.log("Making DELETE request to", route, "with data");
    const response = await axios.delete(server + route);
    return response.data;
  } catch (error) {
    console.error("Error making remove request:", error);
    throw error;
  }
};

export default deleteCall;
