import React from "react";

const Profile = ({ classList, data, setData, error }) => {
  const onProfileSubmit = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className={classList}>
      <div>
        <input
          type="text"
          name="name"
          className="profileInput"
          value={data.name}
          onChange={onProfileSubmit}
          placeholder="name"
        ></input>
        {error.name && <span className="error">{error.name}</span>}
      </div>
      <div>
        <input
          type="number"
          name="age"
          className="profileInput"
          value={data.age}
          onChange={onProfileSubmit}
          placeholder="age"
        ></input>
        {error.age && <span className="error">{error.age}</span>}
      </div>
      <div>
        <input
          type="text"
          name="email"
          className="profileInput"
          value={data.email}
          onChange={onProfileSubmit}
          placeholder="email"
        ></input>
        {error.email && <span className="error">{error.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
