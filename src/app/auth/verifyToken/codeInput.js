"use client";

import React, { useRef, useEffect, useState } from "react";

const CodeInput = () => {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  useEffect(() => {
    inputs.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return;
    // here we want only one value per entry field

    const newValues = [...values];
    newValues[index] = value.toUpperCase();
    setValues(newValues);
    /* here we save a sample of the values state, change an index of the array
     and then update the values state */

    if (value && index < 3) {
      inputs.current[index + 1].focus();
      // here we keep changing focus to the next field until the entire fields has been filled
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
    /* if the "Backspace" key is pressed, and the current field is empty, and the index is still greater than 0
    then change focus to the previous field */
  };

  return (
    <div className="flex space-x-2 w-full lg:justify-center">
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputs.current[index] = el)}
          className="w-10 h-10 text-center border-2 rounded-md focus:outline-none border-[#5A00A3]"
        />
      ))}
    </div>
  );
};

export default CodeInput;
