import React from "react";

const Setting = ({ classList, setData, error, data }) => {
  const handleThemeChange = (e) => {
    setData((prev) => {
      return { ...prev, theme: e.target.value };
    });
  };
  return (
    <div className={classList}>
      <div>
        <input
          type="radio"
          value={`dark`}
          name="theme"
          checked={data.theme == "dark"}
          onChange={handleThemeChange}
        ></input>
        Dark
      </div>
      <div>
        <input
          type="radio"
          value={`light`}
          name="theme"
          checked={data.theme == "light"}
          onChange={handleThemeChange}
        ></input>
        Light
      </div>
    </div>
  );
};

export default Setting;
