import { useEffect, useState } from "react";

const Counter: React.FunctionComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // @ts-ignore
    document.title = counter;
  }, [counter]);

  return (
    <div>
      Aktueller Zählstand: {counter}
      <button
        onClick={() => {
          console.log("on click funktioniert");
          setCounter(counter + 1);
        }}
      >
        Erhöhen
      </button>
    </div>
  );
};

export default Counter;
