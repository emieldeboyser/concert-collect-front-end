const fetchImage = async (image) => {
  const server = process.env.REACT_APP_API_URL;

  try {
    const url = `${server}/api/${image}`;
    return url;
  } catch (error) {
    throw error; // Re-throw error if needed
  }
};

export default fetchImage;
