import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";

function MultPlayer() {
  const { id } = useParams();
  const [mult, setMult] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(mult);
  

  useEffect(() => {
    fetch("https://ceed8a646c7fba8b.mokky.dev/multcard") // o'zingizning linkingiz
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === Number(id));
        setMult(found);
        setLoading(false);
      })
      .catch(err => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Yuklanmoqda...</h2>;
  if (!mult) return <h2>Multfilm topilmadi 😔</h2>;

  return (
    <div className="mult-player">
      <Header />
      <div className="cantainer">
        <div className="mult-player-wrap">
          <h1 className="mult-player-title">{mult.title}</h1>
          {mult.type === "youtube" ? (
            <iframe
              width="100%"
              height="400"
              src={mult.videoUrl}
              title={mult.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : mult.type === "drive" ? (
            <iframe
              width="100%"
              height="400"
              src={mult.videoUrl.replace("/view", "/preview")}
              title={mult.title}
              frameBorder="0"
              allow="autoplay"
            ></iframe>
          ) : (
            <video controls width="100%" height={400}>
              <source src={mult.videoUrl} type="video/mp4" />
              Brauzeringiz video qo‘llab-quvvatlamaydi.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultPlayer;