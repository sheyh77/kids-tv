import React, { useState, useEffect } from 'react';
import Header from "../layout/Header";
import { newMultMap } from "../components/newMultMap";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import StarSvg from '../assets/svg/StarSvg';

function Mult() {
  const [selectedLang, setSelectedLang] = useState("all"); // all = barcha tillar
  const [searchTerm, setSearchTerm] = useState("");
  const [mults, setMults] = useState([]); // API dan kelyotgan malumotlar
  const [loading, setLoading] = useState(true);

  // 🔹 API dan fetch qilish
  useEffect(() => {
    fetch("https://ceed8a646c7fba8b.mokky.dev/multcard")
      .then(res => res.json())
      .then(data => {
        setMults(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  const filteredMults = mults.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLang = selectedLang === "all" || item.lang === selectedLang;
    return matchesSearch && matchesLang;
  });

  return (
    <section className='mult'>
      <div className="cantainer">
        <div className="mult-wrap">
          <Header />

          <input
            type="search"
            placeholder='Qidiruv'
            className='mult-search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Swiper */}
          <div className="mult-top">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {newMultMap.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.img} alt="item image" className='newMult-swiper-img' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Cardlar */}
          <div className="mult-card">
            {/* Til tanlash */}
            <div className="mult-card-option">
              <button
                className={selectedLang === "all" ? "active" : ""}
                onClick={() => setSelectedLang("all")}
              >Barchasi</button>
              <button
                className={selectedLang === "uz" ? "active" : ""}
                onClick={() => setSelectedLang("uz")}
              >Uzbek</button>
              <button
                className={selectedLang === "en" ? "active" : ""}
                onClick={() => setSelectedLang("en")}
              >English</button>
              <button
                className={selectedLang === "ru" ? "active" : ""}
                onClick={() => setSelectedLang("ru")}
              >Russian</button>
            </div>

            {/* Filtrlangan cardlar */}
            <div className="mult-card-cards">
              {loading ? (
                <p>Yuklanmoqda...</p>
              ) : filteredMults.length > 0 ? (
                filteredMults.map((item) => (
                  <div className="mult-cards-item" key={item.id}>
                    <img src={item.img} alt="mult" />
                    <div className="mult-cards-item-text">
                      <p className="mult-cards-item-name">Nomi:</p>
                      <p className="mult-cards-title">{item.title}</p>
                    </div>
                    <div className="mult-cards-item-reyting">
                      <p>Reyting:</p>
                      <StarSvg />
                      <p className="mult-cards-item-reyting">{item.reyting}</p>
                    </div>
                    <Link to={`/mult/${item.id}`}>
                      <button className='mult-cards-item-btn'>Ko'rish</button>
                    </Link>
                  </div>
                ))
              ) : (
                <p className='not-found'>Hech narsa topilmadi 😔</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mult;