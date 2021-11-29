import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div style={{display:"flex"}}
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <button style={{textAlign:"center",
      color:"red",
      marginBottom:"2rem",
      marginLeft:"auto",
      marginRight:"auto"}}>{themeMode === "light" ? "Lights are ON" : "Lights are OFF"}</button>
    </div>
  );
};

export default ThemeToggler;
