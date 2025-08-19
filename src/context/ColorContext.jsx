import { createContext, useEffect, useState } from "react";

export const ColorContext = createContext(null)

function ColorProvider({ children }) {
    const [color, setColor] = useState(localStorage.getItem("color") || "light")

    useEffect(() => {
        document.body.className = color;
        localStorage.setItem("color", color)
    }, [color])

    const toggleTheme = (newTheme) => {
        setColor(newTheme);
    };

    return (
        <ColorContext.Provider value={{ color, setColor, toggleTheme }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorProvider;