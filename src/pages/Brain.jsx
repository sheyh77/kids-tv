import React from 'react';
import Header from "../layout/Header";
import NussaImg from "/images/nussa.jpg";
import Alifbo from "/images/alifbo.jpg";
import HayvonsImg from "/images/hayvonlar.webp";
import NumsImg from "/images/raqamlar.jpg";
import { useNavigate } from 'react-router-dom';

function Brain() {

  const navigate = useNavigate();

  return (
    <section className="brain">
      <div className="cantainer">
        <div className="brain-wrap">
          <Header />
          <h1 className="brain-title">Bilimdon</h1>
          <div className="brain-cards">
            <div className="brain-cards-item brain-cards-item-yellow" onClick={() => navigate("/bilimdon/brainmult")}>
              <img src={NussaImg} alt="nussa" className='brain-cards-item-img'/>
              <p className="brain-card-item-title">Ilm beruvchi multfilmlar</p>
            </div>
            <div className="brain-cards-item brain-cards-item-blui" onClick={() => navigate("/bilimdon/harflar")}>
              <img src={Alifbo} alt="alifbo image" className='brain-cards-item-img'/>
              <p className="brain-card-item-title">Harflarni o'rganamiz</p>
            </div>
            <div className="brain-cards-item brain-cards-item-pink" onClick={() => navigate("/bilimdon/hayvonlar")}>
              <img src={HayvonsImg} alt="hayvonlar image" className='brain-cards-item-img'/>
              <p className="brain-card-item-title">Hayvonlar bilan tanishamiz</p>
            </div>
            <div className="brain-cards-item brain-cards-item-green" onClick={() => navigate("/bilimdon/raqamlar")}>
              <img src={NumsImg} alt="nums image" className='brain-cards-item-img'/>
              <p className="brain-card-item-title">Sonlar va hisoblash</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brain