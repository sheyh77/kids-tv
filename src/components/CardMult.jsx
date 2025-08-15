import React from 'react';
import { Link } from 'react-router-dom';
import { cardMultMap } from './cardMultMap';

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
                                        <Link to={item.to}>
                                            <img src={item.img} className='cardMult-card-img' alt={item.title} />
                                            <p className="cardMult-card-item-title">{item.title}</p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="cardMult-uz">
                        <h1 className="cardMult-title">Ingliz tilida mulfilmlar</h1>
                        <div className="cardMult-card">
                            {
                                cardMultMap.map((item) => (
                                    <div className="cardMult-card-item" key={item.id}>
                                        <Link to={item.to}>
                                            <img src={item.img} className='cardMult-card-img' alt={item.title} />
                                            <p className="cardMult-card-item-title">{item.title}</p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardMult