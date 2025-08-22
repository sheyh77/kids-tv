import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeSvg from "../assets/svg/HomeSvg";
import TvSvg from "../assets/svg/TvSvg";
import UserSvg from "../assets/svg/UserSvg";
import useTranslate from "../hook/useTranslate";
import SettingsSvg from "../assets/svg/SettingsSvg"

function Header() {

    const { t } = useTranslate()

    return (
        <header className="header">
            <div className="cantainer">
                <div className="header-wrap">
                    <div className="header-logo">
                        <Link className='header-logo-title'>Multi Kids</Link>
                    </div>
                    <nav className="header-nav">
                        <Link to={"/"}>{t("asosiy")}</Link>
                        <Link to={"/multfilm"}>{t("multfilm")}</Link>
                        <Link to={"/user"}>{t("profile")}</Link>
                        <Link to={"/settings"}>{t("settings")}</Link>
                    </nav>

                    {/* header media menu */}

                    <div className="header-menu">
                        <div className="header-menu-nav">
                            <Link to={"/"}>
                                <button className='header-menu-block'>
                                    <HomeSvg />
                                    <p className='header-menu-desc'>{t("asosiy")}</p>
                                </button>
                            </Link>
                            <Link to={"/multfilm"}>
                                <button className='header-menu-block'>
                                    <TvSvg />
                                    <p className='header-menu-desc'>{t("multfilm")}</p>
                                </button>
                            </Link>
                            <Link to={"/user"}>
                                <button className='header-menu-block'>
                                    <UserSvg />
                                    <p className='header-menu-desc'>Profil</p>
                                </button>
                            </Link>
                            <Link to={"/settings"}>
                                <button className='header-menu-block'>
                                    <SettingsSvg />
                                    <p className='header-menu-desc'>Settings</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header