import { useEffect, useState } from "react";

export const useToggleTheme = () => {
  const [palette, setPalette] = useState("gold");
  console.log(palette);

  const toggleTheme = (e) => {
    const val = e.currentTarget.value;
    setPalette(val);
  };

  useEffect(() => {}, [palette]);

  return { palette, toggleTheme };
};
