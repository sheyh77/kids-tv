import React, { useEffect, useState } from 'react'
import Header from '../layout/Header';
import KubokSvg from '../assets/svg/KubokSvg';
import ClockSvg from '../assets/svg/ClockSvg';
import FavouriteSvg from '../assets/svg/FavouriteSvg';
import FireSvg from '../assets/svg/FireSvg';

function User() {
  const [userData, setUserData] = useState(null);
  const localUser = JSON.parse(localStorage.getItem("user")); // register yoki login qilganda saqlangan user obyekt

  useEffect(() => {
    if (localUser?.id) {
      fetch(`https://ceed8a646c7fba8b.mokky.dev/foydalanuvchi/${localUser.id}`)
        .then(res => res.json())
        .then(data => setUserData(data))
        .catch(err => console.error("User fetch error:", err));
    }
  }, [localUser]);

  if (!userData) return <p>Loading...</p>;

  return (
    <section className="user">
      <div className="cantainer">
        <div className="user-wrap">
          <Header />
          <h1 className="user-title">Mening profilim</h1>
          <div className="user-content">
            {/* Profil haqida */}
            <div className="user-content-about">
              <div className="user-content-about-desc">
                <div className="user-content-about-img"></div>
                <div className="user-content-about-desc-text">
                  <p className="user-content-about-desc-text-name">
                    {userData.username}
                  </p>
                  <p className="user-content-about-desc-text-num">
                    {userData.password}
                  </p>
                </div>
              </div>
            </div>

            {/* Statistika */}
            <div className="user-content-history">
              <div className="user-content-history-item">
                <KubokSvg />
                <h1 className="user-chi-num">{userData.videosWatched || 0}</h1>
                <p className="user-chi-sub">Ko'rilgan videolar</p>
              </div>
              <div className="user-content-history-item">
                <ClockSvg />
                <h1 className="user-chi-num">{userData.totalTime || "0:00:00"}</h1>
                <p className="user-chi-sub">Jami vaqt</p>
              </div>
              <div className="user-content-history-item">
                <FavouriteSvg />
                <h1 className="user-chi-num">{userData.favourites || 0}</h1>
                <p className="user-chi-sub">Yoqtirilgan multfilmlar</p>
              </div>
              <div className="user-content-history-item">
                <FireSvg />
                <h1 className='user-chi-num'>{userData.dailyLearning || 0}</h1>
                <p className="user-chi-sub">Kunlik o'rganishlar</p>
              </div>
            </div>

            {/* Yutuqlar */}
            <div className="user-achievents">
              <div className="user-achievents-box">
                <p className="user-achievents-title">Yutuqlar</p>
                {userData.achievements?.length > 0 ? (
                  userData.achievements.map((ach, i) => (
                    <div key={i} className="user-achievents-box">
                      <div className="user-achievents-item">
                        <div className="user-achievents-item-img">
                          <img src={ach.img} alt={ach.title} />
                        </div>
                        <div className="user-achievents-item-text">
                          <p className="user-achievents-item-text-title">{ach.title}</p>
                          <p className="user-achievents-item-text-sub">{ach.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Hozircha yutuqlar yo‘q</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default User;