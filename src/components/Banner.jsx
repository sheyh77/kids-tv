import React from 'react'
import { Link } from 'react-router-dom'
import useTranslate from '../hook/useTranslate'

function Banner() {

    const { t } = useTranslate()

    return (
        <section className="banner">
            <div className="cantainer">
                <div className="banner-wrap">
                    <div className="banner-desc">
                        <h1 className="banner-title">{t("top_mult")}</h1>
                        <button className='banner-btn'>
                            <Link to="/multfilm">{t("top_watch_btn")}</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner