import React from "react";

export default function SeedTypes() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-[#ffa726b3] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
            data-aos="zoom-out-up"
          >
            <h2 className="h2 mb-4">О нас</h2>
            <p className="text-xl text-gray-600">
              Наша линейка включает в себя следующие сорта:
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Озимая пшеница
              </h4>
              <p className="text-gray-600 text-left">
                <strong>Сорт</strong>: Гром, Алексеич, Юка, Тимирязевка-150,
                Стиль 18, Граф, Ахмат, Еланчик, Степь, Бумба, Агрофак-100 и др.{" "}
                <br />
                <strong>Репродукция</strong>: ЭС, РС-1, РС-2
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Яровой ячмень
              </h4>
              <p className="text-gray-600 text-left">
                <strong>Сорт</strong>: Ратник, Формат, Федос
                <br />
                <strong>Репродукция</strong>: РС-1, РС-2
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Нут
              </h4>
              <p className="text-gray-600 text-left">
                <strong>Сорт</strong>: Приво-1
                <br />
                <strong>Репродукция</strong>: РС-1, РС-2
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Горох
              </h4>
              <p className="text-gray-600 text-left">
                <strong>Сорт</strong>: Аксайский усатый 7<br />
                <strong>Репродукция</strong>: РС-1, РС-2
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Лен
              </h4>
              <p className="text-gray-600 text-left">
                <strong>Сорт</strong>: ВНИИМК-620, Флиз <br />
                <strong>Репродукция</strong>: РС-1, РС-2
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
