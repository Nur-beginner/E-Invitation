import { useState, useEffect } from "react";
import Navbar from "../Navbar.jsx";

function TimeEvent() {
  const targetDate = new Date("2026-05-12T00:00:00").getTime();

  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, );

  return (
    <main className="bg-linear-to-br from-primary via-primary/90 to-primary/50 min-h-screen text-white overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#f4b04b]/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#f4b04b]/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#f4b04b]/5 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">

        {/* header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-Girassol tracking-widest font-bold uppercase">Graduation Ceremony</h1>
          <p className="text-white/70">Waktu tersisa menuju kelulusan</p>
        </div>

        {/* countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">

          <Box label="Hari" value={time.days} />
          <Box label="Jam" value={time.hours} />
          <Box label="Menit" value={time.minutes} />
          <Box label="Detik" value={time.seconds} pulse />

        </div>
      </div>

      <Navbar />
    </main>
  );
}

function Box({ label, value, pulse }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
      <div className={`text-5xl font-bold text-[#f4b04b] ${pulse ? "animate-pulse" : ""}`}>
        {value}
      </div>
      <div className="text-white/80 text-sm uppercase">{label}</div>
    </div>
  );
}

export default TimeEvent;