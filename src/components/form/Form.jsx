import React, { useState } from "react";

const Form = ({ handleSubmit, handleChange, value, title, form, onClose }) => {
  return (
    <div>
      {/* Form */}
      <div className="bg-gray-100 p-5 rounded-standardT w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
          className="bg-blue-500 text-white p-3 rounded-standardT font-bold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
