import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Inputveld = ({ name, placeholder, onChange }) => {
  const [value, setValue] = useState("");
  const [validationFeedback, setValidationFeedback] = useState("");

  const { t } = useTranslation();

  const validate = () => {
    if (value === "") {
      setValidationFeedback(t("verplicht"));
    } else {
      setValidationFeedback("");
    }
  };

  useEffect(() => {
    validate();
  }, [value]);

  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Inputveld;
