import React, { useState } from "react";
import useDarkSide from "./useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Swithcer() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="px-2 ">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          sunColor="white"
          size={28}
        />
      </div>
    </>
  );
}
