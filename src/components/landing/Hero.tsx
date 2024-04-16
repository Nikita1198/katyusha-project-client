import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Hero({ onClick }) {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
      }}
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="relative max-w-6xl mx-auto pt-16 py-8 px-4 sm:px-6 ">
        <div className="relative pb-8 pt-12 md:pt-12 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 ">
            <Typography
              data-aos="fade-up"
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 400,
                fontFamily: "Marck Script",
                letterSpacing: ".05rem",
                textDecoration: "none",
                alignItems: "center",
                mb: 2,
              }}
            >
              Катюша
            </Typography>
            <p
              className="text-xl mb-7 mt-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Ваш надежный помощник в расчете и планировании удобрений для
              различных сельскохозяйственных культур.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Button
                  component={Link}
                  variant="contained"
                  to={{
                    pathname: "/cultures",
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      pt: "3px",
                    }}
                  >
                    Попробовать
                  </Typography>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="500"
        style={{
          position: "absolute",
          bottom: 150,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="self-center animate-bounce"
          style={{ cursor: "pointer" }}
          onClick={onClick}
        >
          <div className="bg-white dark:bg-slate-800 p-2 w-14 h-14 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-12 text-green-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
