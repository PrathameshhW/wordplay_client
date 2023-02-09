import React from "react";

const FormRow = ({ name, type, value, handleChange, labelText }) => {
  return (
    <div className="flex flex-col justify-center text-left gap-2 w-full uppercase">
      <label htmlFor={name} className="border-b-2 text-white">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="w-full py-2 px-2"
      />
    </div>
  );
};

export default FormRow;
