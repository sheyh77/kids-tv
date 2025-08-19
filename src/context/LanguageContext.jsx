import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
    const LocalLang = localStorage.getItem("lang") || "uz"
    const [language, setLanguage] = useState(LocalLang)

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;