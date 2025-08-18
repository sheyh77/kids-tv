import React, { useState } from 'react'
import Header from '../layout/Header';
import ProfileSvg from "../assets/svg/ProfileSvg";
import HistorySvg from "../assets/svg/HistorySvg";
import SettingsSvg from "../assets/svg/SettingsSvg";
import LogOutSvg from "../assets/svg/LogOutSvg";

function User() {

  const [active, setActive] = useState("profile")

  return (
    <section className="user">
      <div className="cantainer">
        <div className="user-wrap">
          <Header />
          <div className="user-menu">
            <div className={`user-menu-block ${active === "profile" ? "active" : ""}`} onClick={() => setActive("profile")}>
              <ProfileSvg />
            </div>
            <div className={`user-menu-block ${active === "history" ? "active" : ""}`} onClick={() => setActive("history")}>
              <HistorySvg />
            </div>
            <div className={`user-menu-block ${active === "settings" ? "active" : ""}`} onClick={() => setActive("settings")}>
              <SettingsSvg />
            </div>
            <div className={`user-menu-block ${active === "logout" ? "active" : ""}`} onClick={() => setActive("logout")}>
              <LogOutSvg />
            </div>
          </div>
          <div className="user-info">
            <div className="user-info2">
              {
                active === "profile" && (
                  <div className="user-info-box">
                    <h1 className="user-info-title">Profil</h1>
                    <div className="user-info-obj">
                      <div className="user-info-inp">
                        <input type="text" placeholder='Ismingiz' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Parol' />
                        <input type="text" placeholder='Manzil' />
                        <input type="phone" placeholder='Telefon raqam' />
                      </div>
                      <div className="user-info-photo">
                        <div className="user-info-photo-download"></div>
                      </div>
                    </div>
                    <div className="user-info-save">
                      <button className='user-info-save-btn'>Saqlash</button>
                    </div>
                  </div>
                )
              }
              {
                active === "history" && (
                  <h1>history</h1>
                )
              }
              {
                active === "settings" && (
                  <h1>settings</h1>
                )
              }
              {
                active === "logout" && (
                  <h1>logout</h1>
                )
              }
            </div>
            <div className="user-info-res">
              {
                active === "profile" && (
                  <>
                    <div className="user-info-res-photo">
                      <div className="user-info-res-img"></div>
                    </div>
                    <div className="user-info-object">
                      <input type="text" placeholder='Ismingiz' />
                      <input type="email" placeholder='Email' />
                      <input type="password" placeholder='Parol' />
                      <input type="text" placeholder='Manzil' />
                      <input type="phone" placeholder='Telefon raqam' />
                    </div>
                    <div className="user-info-saves">
                      <button className='user-info-saves-btn'>Saqlash</button>
                    </div>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default User