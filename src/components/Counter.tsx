import { useState } from "react";

const Counter: React.FunctionComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      Aktueller Zählstand: {counter}
      <button
        onClick={() => {
          console.log("on click funktioniert");
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        Erhöhen
      </button>
    </div>
  );
};

export default Counter;
