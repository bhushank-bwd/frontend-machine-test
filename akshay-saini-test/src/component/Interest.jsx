import React from "react";

const Interest = ({ classList, data, setData, error }) => {
  const addInterest = (e) => {
    setData((prevData) => {
      const interest = e.target.checked
        ? [...prevData.interest, e.target.value]
        : prevData.interest.filter((i) => i != e.target.value);
      return { ...prevData, interest };
    });
  };
  return (
    <div className={classList}>
      <input
        type="checkbox"
        className=""
        checked={data.interest.includes("music")}
        onChange={addInterest}
        value={`music`}
      ></input>
      Music
      <br />
      <input
        type="checkbox"
        className=""
        checked={data.interest.includes("javascript")}
        onChange={addInterest}
        value={`javascript`}
      ></input>
      Javascript
      <br />
      <input
        type="checkbox"
        className=""
        checked={data.interest.includes("java")}
        onChange={addInterest}
        value={`java`}
      ></input>
      Java
      {error.interest && <span className="error">{error.interest}</span>}
    </div>
  );
};

export default Interest;
