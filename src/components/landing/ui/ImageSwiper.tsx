import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ImageSwiper = ({ folderPath, autoplayDelay, slideOptions }) => {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  return (
    <Swiper
      {...slideOptions}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={`${folderPath}/${image}`} className="rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
