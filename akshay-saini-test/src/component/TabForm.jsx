import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

const TabForm = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: 0,
    email: "",
    interest: [],
    theme: "light",
  });
  const [error, setError] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        let error = {};
        if (!data.name || data.name.length < 1) {
          error.name = "Enter name";
        } else if (data.age < 18) {
          error.age = "Enter age above 18 or greater";
        } else if (!data.email || data.email.length < 0) {
          error.email = "Enter email";
        }
        if (error.name || error.age || error.email) {
          setError(error);
          return false;
        } else {
          setError({});
          return true;
        }
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        if (data.interest.length == 0) {
          setError({ interest: "Select at least on interest" });
          return false;
        } else {
          setError({});
          return true;
        }
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        return true;
      },
    },
  ];
  const handleNextClick = () => {
    if (tabs[activeIndex].validate()) setActiveIndex((prev) => prev + 1);
  };
  const handlePreviousClick = () => {
    setActiveIndex((prev) => prev - 1);
  };
  const onSubmitClick = () => {
    console.log(data);
  };
  const ActiveComponent = tabs[activeIndex].component;
  return (
    <div>
      <div className="tabListDiv">
        {tabs.map((t, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                if (tabs[activeIndex].validate()) setActiveIndex(index);
              }}
              className={`tabTitle ${activeIndex == index && "activeTab"}`}
            >
              {t.name}
            </div>
          );
        })}
      </div>
      <ActiveComponent
        classList={`mainComponent`}
        data={data}
        setData={setData}
        error={error}
      />
      <button
        onClick={handlePreviousClick}
        className={`btn ${activeIndex == 0 && "d-none"}`}
      >
        Previous
      </button>
      <button
        onClick={handleNextClick}
        className={`btn ${activeIndex == tabs.length - 1 && "d-none"}`}
      >
        Next
      </button>
      <button
        onClick={onSubmitClick}
        className={`btn ${activeIndex != tabs.length - 1 && "d-none"}`}
      >
        Submit
      </button>
    </div>
  );
};

export default TabForm;
