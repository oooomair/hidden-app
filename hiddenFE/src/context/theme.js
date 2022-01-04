import { createContext, useState, useEffect } from "react";


const themesBody = {
  dark: {
    backgroundColor: "rgb(18, 18, 18)",
    homeBg: "linear-gradient(180deg, rgb(18, 18, 18) 82%, rgb(40, 40, 40) 18%)",
    homeBgRes: "rgb(18, 18, 18)",
    wave: 'rgb(40, 40, 40)',
    color: "white",
  },
  light: {
    backgroundColor: "rgb(235, 235, 235)",
    homeBg: "linear-gradient(180deg, rgb(235, 235, 235) 82%, rgb(205, 205, 205) 18%)",
    homeBgRes: "rgb(235, 235, 235)",
    wave: 'rgb(205, 205, 205)',
    color: "black",
  },
};

const themesInput = {
  dark: {
    background: 'rgb(50, 50, 50)',
    border: '1px solid rgb(50, 50, 50)',
    color: 'white',
    btnBackground: 'rgb(18, 18, 18)',
    btnBorder: '1px solid #548CFF',
    btnDisabledBorder: '2px solid rgb(50, 50, 50)',
    btnDisabledColor: 'rgb(50, 50, 50)',
    sliderbg: 'rgb(50, 50, 50)'
  },
  light: {
    background: 'rgb(220, 220, 220)',
    border: '1px solid rgb(230, 230, 230)',
    color: 'black',
    btnBackground: 'rgb(240, 240, 240)',
    btnBorder: '1px solid #548CFF',
    btnDisabledBorder: '2px solid rgb(225, 225, 225)',
    btnDisabledColor: 'rgb(225, 225, 225)',
    sliderbg: 'rgb(220, 220, 220)'
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const themeBody = isDark ? themesBody.dark : themesBody.light;
  const themeInput = isDark ? themesInput.dark : themesInput.light;

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ themeBody, themeInput, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};