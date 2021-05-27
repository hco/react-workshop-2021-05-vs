import { useState, useCallback } from "react";

function Toggle() {
  const [isToggleOn, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(function (currentValueOfIsToggleOn) {
      return !currentValueOfIsToggleOn;
    });
    setToggle((v) => !v);
  };

  return <button onClick={handleClick}>{isToggleOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
