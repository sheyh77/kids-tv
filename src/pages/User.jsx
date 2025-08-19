import React, { useContext, useEffect, useState } from 'react'
import Header from '../layout/Header';
import ProfileSvg from "../assets/svg/ProfileSvg";
import HistorySvg from "../assets/svg/HistorySvg";
import SettingsSvg from "../assets/svg/SettingsSvg";
import LogOutSvg from "../assets/svg/LogOutSvg";
import { LanguageContext } from '../context/LanguageContext';

function User() {

  const [active, setActive] = useState("profile")
  const [history, setHistory] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(saved)
  }, [])

  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  }

  const { setLanguage } = useContext(LanguageContext)
  const handleChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value)
  }

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
                  history.length === 0 ? (
                    <p>Hali hech qanday multfilm ko‘rilmagan</p>
                  ) : (
                    <div>
                      <h1 className="user-history-title">Ko‘rilgan multfilmlar</h1>
                      <ol className='user-history-desc'>
                        {history.map((item, i) => (
                          <li key={i}>{item.title}</li>
                        ))}
                      </ol>
                    </div>
                  )
                )
              }

              {
                active === "settings" && (
                  <div className="user-settings">
                    <h1 className="user-settings-title">⚙️ Sozlamalar</h1>

                    <div className="user-settings-item">
                      <label>Tilni tanlang:</label>
                      <select onChange={(e) => handleChange(e)} defaultValue={localStorage.getItem("lang")}>
                        <option value="uz">O‘zbekcha</option>
                        <option value="en">Inglizcha</option>
                        <option value="ru">Ruscha</option>
                      </select>
                    </div>

                    <div className="user-settings-item">
                      <label>Mavzu:</label>
                      <select>
                        <option value="light">Oq (Light)</option>
                        <option value="dark">Qorong‘i (Dark)</option>
                        <option value="kids">Bolalar rejimi</option>
                      </select>
                    </div>

                    <div className="user-settings-actions">
                      <button className="user-clear-btn" onClick={clearHistory}>🧹 Ko‘rgan tarixni tozalash</button>
                      <button className="user-password-btn">🔑 Parolni yangilash</button>
                    </div>
                  </div>
                )
              }

              {
                active === "logout" && (
                  <div className="user-logout">
                    <div className="user-logout-modal">
                      <h1 className="user-logout-modal-title">Rostan ham chiqmoqchimisiz?</h1>
                      <div className="user-logout-modal-btn">
                        <button className='user-logout-modal-n'>Yo'q</button>
                        <button className='user-logout-modal-y'>Ha</button>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            {/* responsive uchun */}
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
              {
                active === "history" && (
                  history.length === 0 ? (
                    <p>Hali hech qanday multfilm ko‘rilmagan</p>
                  ) : (
                    <div>
                      <h1 className="user-history-title">Ko‘rilgan multfilmlar</h1>
                      <ol className='user-history-desc'>
                        {history.map((item, i) => (
                          <li key={i}>{item.title}</li>
                        ))}
                      </ol>
                    </div>
                  )
                )
              }
              {
                active === "settings" && (
                  <div className="user-settings">
                    <h1 className="user-settings-title">⚙️ Sozlamalar</h1>

                    <div className="user-settings-item">
                      <label>Tilni tanlang:</label>
                      <select>
                        <option value="uz">O‘zbekcha</option>
                        <option value="en">Inglizcha</option>
                        <option value="ru">Ruscha</option>
                      </select>
                    </div>

                    <div className="user-settings-item">
                      <label>Mavzu:</label>
                      <select>
                        <option value="light">Oq (Light)</option>
                        <option value="dark">Qorong‘i (Dark)</option>
                        <option value="kids">Bolalar rejimi</option>
                      </select>
                    </div>

                    <div className="user-settings-actions">
                      <button className="user-clear-btn" onClick={clearHistory}>🧹 Ko‘rgan tarixni tozalash</button>
                      <button className="user-password-btn">🔑 Parolni yangilash</button>
                    </div>
                  </div>
                )
              }
              {
                active === "logout" && (
                  <div className="user-logout">
                    <div className="user-logout-modal">
                      <h1 className="user-logout-modal-title">Rostan ham chiqmoqchimisiz?</h1>
                      <div className="user-logout-modal-btn">
                        <button className='user-logout-modal-n'>Yo'q</button>
                        <button className='user-logout-modal-y'>Ha</button>
                      </div>
                    </div>
                  </div>
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