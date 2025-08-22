import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
    const LocalLang = localStorage.getItem("lang") || "uz"
    const [language, setLanguage] = useState(LocalLang)

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang); // tanlangan tilni saqlash
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("language");
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);


    return (
        <LanguageContext.Provider value={{ language, setLanguage, handleLanguageChange }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;