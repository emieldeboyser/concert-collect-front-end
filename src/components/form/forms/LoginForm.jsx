import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoEye, IoEyeOff } from "react-icons/io5";

const LoginForm = ({ formData }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    formData(form);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = t("Username is required");
    }

    if (!form.password.trim()) {
      newErrors.password = t("Password is required");
    } else if (form.password.length < 6) {
      newErrors.password = t("Password must be at least 6 characters");
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", form);
      // Handle form submission logic here
    }
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <form
      className="flex flex-col items-center gap-2 pt-5"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center w-full gap-5">
        <label className="w-1/3">{t("username")}:</label>
        <input
          type="text"
          name="username"
          className="rounded-lg text-black p-2 w-2/3"
          placeholder={t("username")}
          onChange={handleChange}
        />
      </div>
      {errors.username && (
        <p className="text-red-500 text-sm">{errors.username}</p>
      )}

      <div className="flex items-center w-full gap-5 relative">
        <label className="w-1/3">{t("password")}:</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          className="rounded-lg text-black p-2 w-2/3"
          placeholder={t("password")}
          onChange={handleChange}
        />
        <div className="absolute right-[5px]">
          {showPassword ? (
            <IoEyeOff
              className="text-lg cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <IoEye
              className="text-lg cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
      </div>
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}
    </form>
  );
};

export default LoginForm;
