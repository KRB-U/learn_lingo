import { useToggleTheme } from "../../hooks/useToggleTheme";

export default function ThemeSwitcher() {
  const { toggleTheme } = useToggleTheme();

  return (
    <div>
      <select
        name="theme"
        onChange={toggleTheme}
        style={{
          cursor: "pointer",
          borderRadius: "10px",
          padding: "2px",
        }}
      >
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
