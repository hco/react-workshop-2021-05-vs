import { useState } from "react";
import Clock from "./Clock";

function Toggle() {
  const [isToggleOn, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevToggleValue) => !prevToggleValue);
  };

  return (
    <>
      <button onClick={handleClick}>{isToggleOn ? "ON" : "OFF"}</button>
      {isToggleOn && <Clock />}
    </>
  );
}

export default Toggle;
