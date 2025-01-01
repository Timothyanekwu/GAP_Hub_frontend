import React from "react";

const FormInput = ({ type, value, placeholder, handler }) => {
  return (
    <div>
      <input
        className="w-full border-[1.5px] border-[#C6C6C6] rounded-full h-12 px-5 text-md outline-none focus:border-[#5A00A3]"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handler}
      />
    </div>
  );
};

export default FormInput;
