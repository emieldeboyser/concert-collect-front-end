import axios from "axios";

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3005/api/getAccessToken"
    );
    return response.data.access_token;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default getAccessToken;
