import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <section className="banner">
            <div className="cantainer">
                <div className="banner-wrap">
                    <div className="banner-desc">
                        <h1 className="banner-title">Sevimli Multiklaring Shu Yerda!</h1>
                        <button className='banner-btn'>
                            <Link to="/multfilm">Tomosha qilish</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner