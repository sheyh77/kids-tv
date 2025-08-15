import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cardMultEng, cardMultMap, cardMultRU } from './cardMultMap';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';



function CardMult() {
    return (
        <section className="cardMult">
            <div className="cantainer">
                <div className="cardMult-wrap">
                    <div className="cardMult-uz">
                        <h1 className="cardMult-title">O'zbek tilida mulfilmlar</h1>
                        <div className="cardMult-card">
                            {
                                cardMultMap.map((item) => (
                                    <div className="cardMult-card-item" key={item.id}>
                                        <div className="cardMult-card-item-img">
                                            <img src={item.img} className='cardMult-card-img' alt={item.title} />
                                        </div>
                                        <div className="cardMult-card-item-desc">
                                            <p className="cardMult-card-item-title">{item.title}</p>
                                            <p className='cardMult-card-item-subtitle'>O'zbek tilida bolajonlarning sevimli multfilmi</p>
                                            <Link to={item.to}>
                                                <button className='cardMult-card-item-link'>Korish</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* swiper responsive uz*/}
                    <div className="cardMult-uz cardMult-swiper">
                        <h1 className="cardMult-title">O'zbek tilida mulfilmlar</h1>
                        <div className="cardMult-card">
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                lazy={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    cardMultMap.map((item) => (
                                        <SwiperSlide>
                                            <div className="cardMult-card-item" key={item.id}>
                                                <div className="cardMult-card-item-img">
                                                    <img src={item.img} className='cardMult-card-img' alt={item.title} />
                                                </div>
                                                <div className="cardMult-card-item-desc">
                                                    <p className="cardMult-card-item-title">{item.title}</p>
                                                    <p className='cardMult-card-item-subtitle'>O'zbek tilida bolajonlarning sevimli multfilmi</p>
                                                    <Link to={item.to}>
                                                        <button className='cardMult-card-item-link'>Korish</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>

                    <div className="cardMult-uz">
                        <h1 className="cardMult-title">Ingliz tilida mulfilmlar</h1>
                        <div className="cardMult-card">
                            {
                                cardMultEng.map((item) => (
                                    <div className="cardMult-card-item" key={item.id}>
                                        <div className="cardMult-card-item-img">
                                            <img src={item.img} className='cardMult-card-img' alt={item.title} />
                                        </div>
                                        <div className="cardMult-card-item-desc">
                                            <p className="cardMult-card-item-title">{item.title}</p>
                                            <p className='cardMult-card-item-subtitle'>{item.desc}</p>
                                            <Link to={item.to}>
                                                <button className='cardMult-card-item-link'>Korish</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* swiper responsive eng*/}
                    <div className="cardMult-uz cardMult-swiper">
                        <h1 className="cardMult-title">Ingliz tilida mulfilmlar</h1>
                        <div className="cardMult-card">
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                lazy={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    cardMultEng.map((item) => (
                                        <SwiperSlide>
                                            <div className="cardMult-card-item" key={item.id}>
                                                <div className="cardMult-card-item-img">
                                                    <img src={item.img} className='cardMult-card-img' alt={item.title} />
                                                </div>
                                                <div className="cardMult-card-item-desc">
                                                    <p className="cardMult-card-item-title">{item.title}</p>
                                                    <p className='cardMult-card-item-subtitle'>{item.desc}</p>
                                                    <Link to={item.to}>
                                                        <button className='cardMult-card-item-link'>Korish</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>

                    <div className="cardMult-uz">
                        <h1 className="cardMult-title">Rus tilida mulfilmlar</h1>
                        <div className="cardMult-card">
                            {
                                cardMultRU.map((item) => (
                                    <div className="cardMult-card-item" key={item.id}>
                                        <div className="cardMult-card-item-img">
                                            <img src={item.img} className='cardMult-card-img' alt={item.title} />
                                        </div>
                                        <div className="cardMult-card-item-desc">
                                            <p className="cardMult-card-item-title">{item.title}</p>
                                            <p className='cardMult-card-item-subtitle'>{item.desc}</p>
                                            <Link to={item.to}>
                                                <button className='cardMult-card-item-link'>Korish</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* swiper responsive ru*/}
                    <div className="cardMult-uz cardMult-swiper">
                        <h1 className="cardMult-title">Rus tilida mulfilmlar</h1>
                        <div className="cardMult-card">
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                lazy={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    cardMultRU.map((item) => (
                                        <SwiperSlide>
                                            <div className="cardMult-card-item" key={item.id}>
                                                <div className="cardMult-card-item-img">
                                                    <img src={item.img} className='cardMult-card-img' alt={item.title} />
                                                </div>
                                                <div className="cardMult-card-item-desc">
                                                    <p className="cardMult-card-item-title">{item.title}</p>
                                                    <p className='cardMult-card-item-subtitle'>{item.desc}</p>
                                                    <Link to={item.to}>
                                                        <button className='cardMult-card-item-link'>Korish</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardMult