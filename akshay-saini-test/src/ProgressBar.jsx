import React from "react";

const ProgressBarItem = ({ width: progressWidth }) => {
  return (
    <>
      <div className="outer">
        <div className="inner" style={{ width: `${progressWidth}%` }}>
          {progressWidth}%
        </div>
      </div>
    </>
  );
};

export default ProgressBarItem;
