import React, { useContext, useEffect, useState } from 'react'
import Header from '../layout/Header';
import KubokSvg from '../assets/svg/KubokSvg';
import ClockSvg from '../assets/svg/ClockSvg';
import FavouriteSvg from '../assets/svg/FavouriteSvg';
import FireSvg from '../assets/svg/FireSvg';

import MovieImg from "/images/movie-profile.png";
import FireImg from "/images/fire-profile.png";
import LionImg from "/images/lion-profile.png";

function User() {



  return (
    <section className="user">
      <div className="cantainer">
        <div className="user-wrap">
          <Header />
          <h1 className="user-title">Mening profilim</h1>
          <div className="user-content">
            <div className="user-content-about">
              <div className="user-content-about-desc">
                <div className="user-content-about-img"></div>
                <div className="user-content-about-desc-text">
                  <p className="user-content-about-desc-text-name">Shahriyor</p>
                  <p className="user-content-about-desc-text-num">+998 90 123 45 67</p>
                </div>
              </div>
            </div>
            <div className="user-content-history">
              <div className="user-content-history-item">
                <KubokSvg />
                <h1 className="user-chi-num">15</h1>
                <p className="user-chi-sub">Ko'rilgan videolar</p>
              </div>
              <div className="user-content-history-item">
                <ClockSvg />
                <h1 className="user-chi-num">1:03:43</h1>
                <p className="user-chi-sub">Jami vaqt</p>
              </div>
              <div className="user-content-history-item">
                <FavouriteSvg />
                <h1 className="user-chi-num">Yoqtirilganlar</h1>
                <p className="user-chi-sub">Yoqtirilgan multfilmlar</p>
              </div>
              <div className="user-content-history-item">
                <FireSvg />
                <h1 className='user-chi-num'>5</h1>
                <p className="user-chi-sub">Kunlik o'rganishlar</p>
              </div>
            </div>
            <div className="user-achievents">
              <p className="user-achievents-title">Yutuqlar</p>
              <div className="user-achievents-box">
                <div className="user-achievents-item">
                  <div className="user-achievents-item-img">
                    <img src={MovieImg} alt="" />
                  </div>
                  <div className="user-achievents-item-text">
                    <p className="user-achievents-item-text-title">Birinchi video</p>
                    <p className="user-achievents-item-text-sub">Birinchi videongizni tomosha qildingiz!</p>
                  </div>
                </div>
                <div className="user-achievents-item">
                  <div className="user-achievents-item-img">
                    <img src={FireImg} alt="" />
                  </div>
                  <div className="user-achievents-item-text">
                    <p className="user-achievents-item-text-title">O'rganish chizig'i</p>
                    <p className="user-achievents-item-text-sub">5 kun ketma-ket</p>
                  </div>
                </div>
              </div>
              <div className="user-achievents-box">
                <div className="user-achievents-item">
                  <div className="user-achievents-item-img">
                    <img src={LionImg} alt="" />
                  </div>
                  <div className="user-achievents-item-text">
                    <p className="user-achievents-item-text-title">Hayvonlar mutahasisi</p>
                    <p className="user-achievents-item-text-sub">Hayvonlar haqida 10ta video ko'rdim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default User