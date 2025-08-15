import React from "react";
import { useParams } from "react-router-dom";
import { multMap } from "../data/multMap";
import Header from "../layout/Header";

function MultPlayer() {
  const { id } = useParams();
  const mult = multMap.find(item => item.id === Number(id));

  if (!mult) {
    return <h2>Multfilm topilmadi 😔</h2>;
  }

  return (
    <div className="mult-player">
      <Header />
      <div className="cantainer">
        <div className="mult-player-wrap">
          <h1 className="mult-player-title">{mult.title}</h1>
          {/* Agar mp4 bo‘lsa */}
          <video controls width="100%" height={400}>
            <source src={mult.videoUrl} type="video/mp4" />
            Brauzeringiz video qo‘llab-quvvatlamaydi.
          </video>
        </div>
      </div>
    </div>
  );
}

export default MultPlayer;
