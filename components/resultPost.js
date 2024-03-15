import React, { useEffect, useState } from "react";

const ResultPost = ({ candidate, width }) => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 100);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="rounded-md my-3 border-2 p-2">
      <p className="text-lg font-bold">{candidate}</p>
      <p className="text-lg font-bold"></p>
      <div
        className={`bg-blue-500 h-4 rounded-full transition-width duration-1000 ${
          animationCompleted ? "w-full" : "w-0"
        }`}
        style={{ width: animationCompleted ? width : 0 }}
      ></div>
      <div>{width} </div>
    </div>
  );
};

export default ResultPost;
