const formatDate = (date) => {
  console.log("Date:", date);
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default formatDate;
