import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Hero from "./Hero";
import { useProgressiveImage } from "../../hooks/useProgressiveImage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Seeds from "./Seeds";

const delay = 60000;
const bgImage = "./images/wall2.jpeg";
const placeholder =
  "https://priroda.club/uploads/posts/2022-12/1670601410_priroda-club-p-krasivoe-pole-pshenitsi-krasivo-foto-15.jpg";

export default function Сarousel({ onClick }) {
  const theme = useTheme();
  const loaded = useProgressiveImage(bgImage);

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat border-b-2 border-b-[#fff8e8]"
      style={{
        height: "123vh",
        backgroundImage: `linear-gradient(rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 1)), url(${
          loaded || placeholder
        })`,
      }}
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-offset="100"
    >
      <div className="container max-w-6xl mx-auto h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: delay,
            disableOnInteraction: false,
          }}
          speed={800}
          navigation={
            isDesktop
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  disabledClass: "swiper-button-disabled",
                }
              : false
          }
        >
          <SwiperSlide className="flex justify-center items-center">
            <Hero onClick={() => onClick()} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Seeds />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Box className="bg-blue-100 h-full w-full"></Box>
          </SwiperSlide>
        </Swiper>
        {isDesktop && (
          <>
            <div
              className="swiper-button-next absolute right-5 bottom-10"
              style={{ color: "#72a35f" }}
            />
            <div
              className="swiper-button-prev absolute left-5 bottom-10"
              style={{ color: "#72a35f" }}
            />
          </>
        )}
      </div>
    </section>
  );
}
