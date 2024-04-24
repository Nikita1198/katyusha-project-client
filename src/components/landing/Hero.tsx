import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StartButton from "./ui/StartButton";

export default function Hero({ onClick }) {
  return (
    <section
      style={{ position: "relative", height: "100vh" }}
      data-aos-easing="ease-in-back"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="relative max-w-6xl mx-auto p-4 py-24 md:pt-24">
        <div className="text-center mx-auto py-10 md:py-36 bg-white/90 rounded-2xl shadow">
          <Typography variant="h1" component="h1" sx={{ fontWeight: 400, fontFamily: "Marck Script", letterSpacing: ".05rem", mb: 2 }}>
            Катюша
          </Typography>
          <Typography variant="h5" component="h5" sx={{ fontWeight: 400, letterSpacing: ".05rem", m: 2 }} data-aos="fade-up" data-aos-delay="200">
            Ваш надежный помощник в расчете и планировании удобрений для различных сельскохозяйственных культур.
          </Typography>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <StartButton component={Link} variant="contained" to={{ pathname: "/cultures" }} data-aos="fade-up" data-aos-delay="400">
              <Typography textAlign="center">Попробовать</Typography>
            </StartButton>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        style={{ position: "absolute", bottom: "5vh", left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="self-center animate-bounce" onClick={onClick} style={{ cursor: "pointer" }}>
          <div className="bg-white p-2 w-14 h-14 ring-1 shadow-lg rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
            <svg className="w-8 h-12 text-green-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
