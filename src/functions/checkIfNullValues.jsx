const checkIfNullValues = (formData) => {
  for (let key in formData) {
    if (formData[key] === null || formData[key] === undefined) {
      return true;
    }
  }
  return false;
};

export default checkIfNullValues;
