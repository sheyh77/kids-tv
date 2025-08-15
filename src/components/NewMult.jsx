import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { newMultMap } from './newMultMap';
import { Link } from 'react-router-dom';

function NewMult() {
    return (
        <section className="newMult">
            <div className="cantainer">
                <div className="newMult-wrap">
                    <h1 className='newMult-title'>Yangi multfilmlar</h1>
                    <Swiper navigation={true} modules={[Navigation]} className="newMult-swiper mySwiper">
                        {
                            newMultMap.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Link to={item.to}>
                                        <img src={item.img} alt="item image" className='newMult-swiper-img' />
                                    </Link>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default NewMult