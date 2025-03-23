import { useState } from "react";
import ProgressBarItem from "./ProgressBar";

function App() {
  const bars = [1, 4, 10, 25, 50, 75, 100];
  return (
    <>
      <h1>Progress Bar</h1>
      {bars.map((w) => (
        <ProgressBarItem width={w} />
      ))}
    </>
  );
}

export default App;
