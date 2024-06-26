import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ImageSwiper from "./ui/ImageSwiper";

function Products({}, ref) {
  const swiperOptions = {
    spaceBetween: 10,
    speed: 2000,
    centeredSlides: true,
  };

  return (
    <section ref={ref}>
      <div
        className="bg-white border-b rounded-lg drop-shadow-xl p-4 mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ marginTop: "-8rem" }}
      >
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            FUGUSTIM
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Эффективное удобрение нового поколения
              </h3>
              <p className="text-gray-600 mb-8">
                Уникальная формула с гуминовыми и фульвокислотами, обогащенная
                необходимыми макро- и микроэлементами, аминокислотами и
                витаминами для здорового роста и высокой урожайности ваших
                культур.
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <ImageSwiper
                folderPath="..\images\products"
                autoplayDelay={2500}
                slideOptions={swiperOptions}
              />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <ImageSwiper
                folderPath="..\images\lifecycle"
                autoplayDelay={3000}
                slideOptions={swiperOptions}
              />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Жизненная сила фульвокислот
                </h3>
                <p className="text-gray-600 mb-8">
                  Повышает усвоение питательных веществ растениями, обеспечивая
                  их здоровье и силу для достижения максимального потенциала
                  урожайности.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Экологически чистый продукт
              </h3>
              <p className="text-gray-600 mb-8">
                Поддержка органического земледелия с продукцией на основе
                натурального сырья, безопасной для окружающей среды и здоровья
                людей.
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <ImageSwiper
                folderPath="..\images\seedlings"
                autoplayDelay={3500}
                slideOptions={swiperOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Products);
