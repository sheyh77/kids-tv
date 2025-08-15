import React, { useState } from 'react';
import InstagramSvg from "../assets/svg/InstagramSvg";
import TelegramSvg from "../assets/svg/TelegramSvg";

function Footer() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  
  const BOT_TOKEN = "8402475791:AAFg_td-dqCw8ckYOBaODbaWBaWGXvDBaMk";
  const CHAT_ID = "7218129512";
  const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const handleSend = async () => {
    if (!name.trim() || !message.trim()) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    try {
      const res = await fetch(TELEGRAM_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: `📩 Yangi fikr:\n👤 Ism: ${name}\n💬 Xabar: ${message}`,
        }),
      });

      const data = await res.json();
      if (data.ok) {
        alert("Fikringiz yuborildi ✅");
        setName("");
        setMessage("");
      } else {
        alert("Xabar yuborishda xatolik ❌");
      }
    } catch (err) {
      console.error("Xatolik:", err);
      alert("Xabar yuborishda xatolik yuz berdi ❌");
    }
  };

  return (
    <section className="footer">
      <div className="cantainer">
        <div className="footer-wrap">
          <div className="footer-desc">
            <p className="footer-desc-title">Multi Kids</p>
            <p className="footer-desc-subtitle">
              Bu dastur yosh bolalar uchun turli yomon videolardan va reklamardan saqlangan holda faqat multfilm va qiziqarli o'yinlar uchun yaratilgan.
            </p>
            <p className="footer-desc-in">Bizning ijtimoiy tarmoqlar:</p>
            <div className="footer-desc-btns">
              <a href="https://instagram.com/modix.team" target="_blank" rel="noreferrer">
                <button>
                  <InstagramSvg />
                </button>
              </a>
              <a href="https://t.me/modix_team" target="_blank" rel="noreferrer">
                <button>
                  <TelegramSvg />
                </button>
              </a>
            </div>
          </div>
          <div className="footer-feedback">
            <p className="footer-feedback-title">Taklif va fikr bildirish</p>
            <input
              type="text"
              placeholder="Ism"
              className="footer-feedback-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Fikr va takliflaringiz bolsa yozishingiz mumkin"
              className="footer-feedback-text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="footer-feedback-btn" onClick={handleSend}>
              Yuborish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

