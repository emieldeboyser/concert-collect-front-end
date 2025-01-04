import axios from "axios";

const getSpotifyArtists = async (accessToken, name) => {
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    name
  )}&type=artist`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
      },
    });

    // Return the artists from the response
    return response.data.artists.items;
  } catch (error) {
    console.error("Error fetching Spotify artists:", error);
    throw error;
  }
};

export default getSpotifyArtists;
