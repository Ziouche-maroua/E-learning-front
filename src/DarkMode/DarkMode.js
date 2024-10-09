import React , {useEffect} from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
 const setDarkMode =() => {
    document.querySelector("body").setAttribute('data-theme','dark')
    localStorage.setItem("selectedTheme","dark")
}
 const setLightMode =() => {
    document.querySelector("body").setAttribute('data-theme','light')
    localStorage.setItem("selectedTheme","light")
 }

 const selectedTheme = localStorage.getItem("selectedTheme")
 

const toggleTheme =(event) => {
    if(event.target.checked) setDarkMode()
        else setLightMode()
}
useEffect(() => {
  if (selectedTheme === "dark") {
    setDarkMode();
    document.getElementById("darkmode-toggle").checked = true;
  } else {
    setLightMode();
    document.getElementById("darkmode-toggle").checked = false;
  }
}, [selectedTheme]);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun className="sun" />
        <Moon className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
