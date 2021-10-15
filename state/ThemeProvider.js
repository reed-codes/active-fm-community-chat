import { createContext, useState } from "react";

export const ThemeContext = createContext("dark")

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")

    const payload = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={payload}>
               {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider


