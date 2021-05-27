import { useEffect, useState } from "react";

const Clock: React.FunctionComponent = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>Es ist {time} Uhr.</div>;
};

export default Clock;
