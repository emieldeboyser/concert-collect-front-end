import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Form = ({
  handleSubmit,
  handleChange,
  value,
  title,
  form,
  onClose,
  submitButtonText,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-50 absolute top-0 left-0">
      {/* Form */}
      <div className="flex flex-col  items-center bg-gray-100 p-5 rounded-standardT w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-full flex items-center justify-between">
          <div className="flex-1 flex justify-center">
            <h1 className="font-bold text-xl">{title}</h1>
          </div>
          <button
            className="bg-red-500 text-white p-3 rounded-standardT font-bold"
            onClick={() => onClose(false)}
          >
            X
          </button>
        </div>
        {form}
        <button
          className="mt-4 bg-blue text-white p-5 rounded-standardT font-bold w-1/2 hover:bg-purple-700"
          onClick={handleSubmit}
        >
          {submitButtonText ? submitButtonText : t("submit")}
        </button>
      </div>
    </div>
  );
};

export default Form;
