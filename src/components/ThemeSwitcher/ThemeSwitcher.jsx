import { useSelector } from "react-redux";
import { useToggleTheme } from "../../hooks/useToggleTheme";
import { selectUser } from "../../redux/auth/selectors";

export default function ThemeSwitcher() {
  const currentFilter = useSelector(selectUser);

  const { toggleTheme } = useToggleTheme();

  return (
    <div>
      <select
        name="theme"
        value={currentFilter.theme}
        onChange={toggleTheme}
        style={{
          cursor: "pointer",
          borderRadius: "10px",
          padding: "2px",
        }}
      >
        <option value="gold" name="theme">
          Gold
        </option>

        <option value="lavender" name="theme">
          Lavender
        </option>

        <option value="blueGray" name="theme">
          BlueGray
        </option>

        <option value="coral" name="theme">
          Coral
        </option>

        <option value="melon" name="theme">
          Melon
        </option>
      </select>
    </div>
  );
}
