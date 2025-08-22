import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '../layout/Header';
import SunnySvg from "../assets/svg/SunnySvg";
import LanguageSvg from "../assets/svg/LanguageSvg"
import { LanguageContext } from '../context/LanguageContext';
import useTranslate from '../hook/useTranslate';

function Settings() {

    const [darkMode, setDarkMode] = useState(false);
    const {handleLanguageChange} = useContext(LanguageContext)

    // Avvalgi tanlovni localStorage dan olish
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.body.classList.add("dark");
        }
    }, []);

    // Dark mode o‘zgarganda body ga class qo‘shish
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const { language, setLanguage } = useContext(LanguageContext)
    const { t } = useTranslate()

    return (
        <section className="settings">
            <div className="cantainer">
                <Header />
                <div className="settings-wrap">
                    <h1 className="settings-title">Sozlamalar</h1>
                    <div className="settings-block">
                        <div className="settings-block-item">
                            <div className="settings-block-item-top">
                                <SunnySvg />
                                <p>Mavzular</p>
                            </div>
                            <div className="settings-block-item-bottom">
                                <div className="settings-bib-text">
                                    <p className="settings-bib-text-title">Tema</p>
                                    <p className="settings-bib-text-sub">O'zingizga kerakli mavzuni tanlang</p>
                                </div>
                                <button
                                    className="theme-switch"
                                    onClick={() => setDarkMode(!darkMode)}
                                >
                                    {darkMode ? "🌙 Dark" : "☀️ Light"}
                                </button>
                            </div>
                        </div>
                        <div className="settings-block-item">
                            <div className="settings-block-item-top">
                                <LanguageSvg />
                                <p>Tilni o'zgartirish</p>
                            </div>
                            <div className="settings-block-item-bottom">
                                <div className="settings-bib-text">
                                    <p className="settings-bib-text-title">Til</p>
                                    <p className="settings-bib-text-sub">O'zingizga kerakli tilni tanlang</p>
                                </div>
                                <select value={language} onChange={(e) => handleLanguageChange(e.target.value)} className='settings-language-select'>
                                    <option value="en" className='settings-language-option'>English</option>
                                    <option value="uz" className='settings-language-option'>O'zbek</option>
                                    <option value="ru" className='settings-language-option'>Russion</option>
                                </select>
                            </div>
                        </div>
                        <div className="settings-block-item"></div>
                        <div className="settings-block-item"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Settings