import React from "react";

export default function Seeds() {
  return (
    <section
      className="relative h-screen"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="relative max-w-6xl mx-auto py-8 md:pt-24">
        <div className="relative p-10 md:py-36 bg-white/90 rounded-lg drop-shadow-xl ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            О нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">Наименование</h3>
              <p>Озимая пшеница, яровой ячмень, лён...</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Сорт</h3>
              <p>Гром, Алексеич, Юока, Степь, Бумба...</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Репродукция</h3>
              <p>3С, РС-1, РС-2...</p>
            </div>
          </div>
          <p className="mt-8">
            Весь наш семенной материал выращивается на самых плодородных
            полях...
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold">
              Качество семян - залог вашего высокого урожая!
            </h3>
          </div>
          {/* Add images and additional content here */}
        </div>
      </div>
    </section>
  );
}
