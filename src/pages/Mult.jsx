import React, { useState } from 'react';
import Header from "../layout/Header";
import { newMultMap } from "../components/newMultMap";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { multMap } from '../data/multMap';

function Mult() {
  const [selectedLang, setSelectedLang] = useState("all"); // all = barcha tillar
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrlash
  const filteredMults = multMap.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLang = selectedLang === "all" || item.lang === selectedLang;
    return matchesSearch && matchesLang;
  });

  return (
    <section className='mult'>
      <div className="cantainer">
        <div className="mult-wrap">
          <Header />
          
          {/* Qidiruv */}
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
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
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
              >
                Barchasi
              </button>
              <button 
                className={selectedLang === "uz" ? "active" : ""}
                onClick={() => setSelectedLang("uz")}
              >
                Uzbek
              </button>
              <button 
                className={selectedLang === "en" ? "active" : ""}
                onClick={() => setSelectedLang("en")}
              >
                English
              </button>
              <button 
                className={selectedLang === "ru" ? "active" : ""}
                onClick={() => setSelectedLang("ru")}
              >
                Russion
              </button>
            </div>

            {/* Filtrlangan cardlar */}
            <div className="mult-card-cards">
              {filteredMults.length > 0 ? (
                filteredMults.map((item) => (
                  <div className="mult-cards-item" key={item.id}>
                    <Link to={`/mult/${item.id}`}>
                      <img src={item.img} alt="mult" />
                      <p className="mult-cards-title">{item.title}</p>
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
