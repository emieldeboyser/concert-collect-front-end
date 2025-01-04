const openSpotifyArtist = (id) => {
  const url = `https://api.spotify.com/v1/artists/${id}`;

  return url;
};

export default openSpotifyArtist;
