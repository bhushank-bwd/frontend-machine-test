import React from "react";

const ProgressBarItem = ({ width: progressWidth }) => {
  return (
    <>
      <div className="outer">
        <div
          className="inner"
          style={{
            width: `${progressWidth}%`,
            color: `${progressWidth < 5 ? "black" : "white"}`,
          }}
          role="progress-bar"
          aria-valuenow={progressWidth}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {progressWidth}%
        </div>
      </div>
    </>
  );
};

export default ProgressBarItem;
