import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";
import { useState, useEffect, useContext } from "react";

function ToggleSwitch() {
  //   const [currentTempUnit, setCurrentTempUnit] = useState(`C`);
  //
  //   function handleChange(e) {
  // if (currentTempUnit === `C`) setCurrentTempUnit(`F`);
  // if (currentTempUnit === `F`) setCurrentTempUnit(`C`);
  // console.log(currentTempUnit);
  //   }

  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggleSwitch">
      <input
        type="checkbox"
        className="toggleSwitch__choice"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === `F`
            ? "toggleSwitch__slider toggleSwitch__F"
            : "toggleSwitch__slider toggleSwitch__C"
        }
      ></span>
      <p
        className={`toggleSwitch__descriptor-F ${
          currentTemperatureUnit === `F` && "toggleSwitch__active"
        }`}
      >
        F
      </p>
      <p
        className={`toggleSwitch__descriptor-C ${
          currentTemperatureUnit === `C` && "toggleSwitch__active"
        }`}
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
