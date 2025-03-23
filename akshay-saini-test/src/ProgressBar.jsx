import React, { useEffect, useState } from "react";

const ProgressBarItem = ({ width: progressWidth }) => {
  const [initialProgress, setInitialProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setInitialProgress(progressWidth);
    }, 100);
  }, [progressWidth]);
  return (
    <>
      <div className="outer">
        <div
          className="inner"
          style={{
            // width: `${progressWidth}%`,
            transform: `translateX(${initialProgress - 100}%)`,
            color: `${initialProgress < 5 ? "black" : "white"}`,
          }}
          role="progress-bar"
          aria-valuenow={progressWidth}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {initialProgress}%
        </div>
      </div>
    </>
  );
};

export default ProgressBarItem;
