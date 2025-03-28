import React, { useEffect, useRef, useState } from "react";
const OTP_DIGIT_SIZE = 4;
const OTP = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_SIZE).fill("1"));
  const inputRef = useRef([]);
  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);
  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return;
    let newArr = [...inputArr];
    let newValue = e.target.value.trim();
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    console.log(newArr, newValue);
    if (newValue) {
      console.log(inputRef);
      inputRef.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (!inputArr[index] && e.key == "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  };
  return (
    <div>
      {inputArr.map((item, index) => {
        return (
          <input
            key={index}
            className="otp-input"
            type="text"
            value={inputArr[index]}
            ref={(input) => (inputRef.current[index] = input)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          ></input>
        );
      })}
    </div>
  );
};

export default OTP;
