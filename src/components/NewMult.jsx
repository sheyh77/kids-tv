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
                    <img src="/images/newMult-decor1.png" alt="tom" className='newMult-decor1 newMult-decor' />
                    <img src="/images/newMult-decor2.png" alt="tom" className='newMult-decor2 newMult-decor' />
                    <img src="/images/newMult-decor3.png" alt="jerry" className='newMult-decor3 newMult-decor' />
                    <img src="/images/newMult-decor4.png" alt="tom" className='newMult-decor4 newMult-decor' />
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