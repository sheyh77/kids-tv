// import React, { useRef, useState } from 'react';
// import Header from "../layout/Header";
// import { newMultMap } from "../components/newMultMap";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination } from 'swiper/modules';
// import { Link } from 'react-router-dom';
// import { multMap } from '../data/multMap';

// function Mult() {
//   return (
//     <section className='mult'>
//       <div className="cantainer">
//         <div className="mult-wrap">
//           <Header />
//           <input type="search"
//             placeholder='Qidiruv'
//             className='mult-search'
//           />
//           <div className="mult-top">
//             <Swiper
//               spaceBetween={30}
//               centeredSlides={true}
//               autoplay={{
//                 delay: 2500,
//                 disableOnInteraction: false,
//               }}
//               pagination={{
//                 clickable: true,
//               }}
//               modules={[Autoplay, Pagination]}
//               className="mySwiper"
//             >
//               {
//                 newMultMap.map((item) => (
//                   <SwiperSlide key={item.id}>
//                     <img src={item.img} alt="item image" className='newMult-swiper-img' />
//                   </SwiperSlide>
//                 ))
//               }
//             </Swiper>
//           </div>
//           <div className="mult-card">
//             <div className="mult-card-option">
//               <button>Uzbek</button>
//               <button>English</button>
//               <button>Russion</button>
//             </div>
//             <div className="mult-card-cards">
//               {
//                 multMap.map((item) => (
//                   <div className="mult-cards-item" key={item.id}>
//                     <Link>
//                       <img src={item.img} alt="mult" />
//                       <p className="mult-cards-title">{item.title}</p>
//                     </Link>
//                   </div>
//                 ))
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Mult

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
  const [selectedLang, setSelectedLang] = useState("uz");

  // Tanlangan tilga qarab filtrlash
  const filteredMults = multMap.filter(item => item.lang === selectedLang);

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
          />

          {/* Swiper top qismi */}
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

          {/* Cardlar bo‘limi */}
          <div className="mult-card">
            {/* Til tanlash tugmalari */}
            <div className="mult-card-option">
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
              {filteredMults.map((item) => (
                <div className="mult-cards-item" key={item.id}>
                  <Link to={item.to}>
                    <img src={item.img} alt="mult" />
                    <p className="mult-cards-title">{item.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mult;