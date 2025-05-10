import React, { useState } from "react";

const ChipInput = () => {
  const [inputText, setInputText] = useState("");
  const [inputList, setInputList] = useState([]);
  const handleKeyDown = (e) => {
    if (inputText.trim() !== "" && e.code == "Enter") {
      setInputList((prev) => [...prev, inputText]);
      setInputText("");
    }
  };
  const removeItem = (index) => {
    setInputList((prev) => {
      const tempList = prev.filter((item, i) => {
        return i != index;
      });
      return tempList;
    });
  };
  return (
    <div className="chips-input">
      <h1>Chips Input</h1>
      <input
        className="input"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      ></input>
      <div className="list">
        {inputList.map((item, index) => {
          return (
            <div className="list-item" key={index}>
              <span className="list-item-text">{item}</span>
              <span
                className="list-item-remove"
                onClick={() => {
                  removeItem(index);
                }}
              >
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChipInput;
