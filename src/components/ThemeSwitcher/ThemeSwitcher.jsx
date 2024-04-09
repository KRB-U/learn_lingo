import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useToggleTheme } from "../../hooks/useToggleTheme";

export default function ThemeSwitcher() {
  // const [showTheme, setShowTheme] = useState(false);
  const { toggleTheme, palette } = useToggleTheme();

  useEffect(() => {}, [palette]);

  // useEffect(() => {
  //   const handleKeyDown = (evt) => {
  //     if (evt.code === "Escape") {
  //       setShowTheme(false);
  //     }
  //   };
  //   document.addEventListener("keydown", handleKeyDown);
  //   // document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //     // document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <div>
      <select name="theme" onChange={toggleTheme}>
        <option value="gold" name="theme">
          gold
        </option>
        <option value="lightYellow" name="theme">
          lightYellow
        </option>
        <option value="lavender" name="theme">
          lavender
        </option>
        <option value="lightBlue" name="theme">
          lightBlue
        </option>
        <option value="blueGray" name="theme">
          blueGray
        </option>
        <option value="lightSkyBlue" name="theme">
          lightSkyBlue
        </option>
        <option value="coral" name="theme">
          coral
        </option>
        <option value="lightPink" name="theme">
          lightPink
        </option>
        <option value="melon" name="theme">
          melon
        </option>
        <option value="peach" name="theme">
          peach
        </option>
      </select>
    </div>
  );
}

ThemeSwitcher.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
