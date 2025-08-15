import React from 'react';
import { Link } from 'react-router-dom';
import HomeSvg from "../assets/svg/HomeSvg";
import TvSvg from "../assets/svg/TvSvg";
import BrainSvg from "../assets/svg/BrainSvg";
import UserSvg from "../assets/svg/UserSvg";

function Header() {
    return (
        <header className="header">
            <div className="cantainer">
                <div className="header-wrap">
                    <div className="header-logo">
                        <Link className='header-logo-title'>Multi Kids</Link>
                    </div>
                    <nav className="header-nav">
                        <Link to={"/"}>Asosiy</Link>
                        <Link to={"/multfilm"}>Multfilm</Link>
                        <Link to={"/bilimdon"}>Bilimdon</Link>
                    </nav>

                    {/* header media menu */}

                    <div className="header-menu">
                        <div className="header-menu-nav">
                            <Link to={"/"}>
                                <button className='header-menu-block'>
                                    <HomeSvg />
                                    <p className='header-menu-desc'>Asosiy</p>
                                </button>
                            </Link>
                            <Link to={"/multfilm"}>
                                <button className='header-menu-block'>
                                    <TvSvg />
                                    <p className='header-menu-desc'>Multfilm</p>
                                </button>
                            </Link>
                            <Link to={"/bilimdon"}>
                                <button className='header-menu-block'>
                                    <BrainSvg />
                                    <p className='header-menu-desc'>Bilimdon</p>
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