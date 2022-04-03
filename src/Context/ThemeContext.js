import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeHanlder = (themetype) => {
    themetype === "light"
      ? setTheme((prev) => "dark")
      : setTheme((prev) => "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, themeHanlder }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
