import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeSvg from "../assets/svg/HomeSvg";
import TvSvg from "../assets/svg/TvSvg";
import BrainSvg from "../assets/svg/BrainSvg";
import UserSvg from "../assets/svg/UserSvg";
import useTranslate from "../hook/useTranslate";

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
                        <Link to={"/bilimdon"}>{t("bilimdon")}</Link>
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
                            <Link to={"/bilimdon"}>
                                <button className='header-menu-block'>
                                    <BrainSvg />
                                    <p className='header-menu-desc'>{t("bilimdon")}</p>
                                </button>
                            </Link>
                            <Link to={"/user"}>
                                <button className='header-menu-block'>
                                    <UserSvg />
                                    <p className='header-menu-desc'>Profil</p>
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