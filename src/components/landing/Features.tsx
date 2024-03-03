import React, { forwardRef } from "react";

function Features({}, ref) {
  return (
    <section ref={ref}>
      <div className="max-w-6xl mx-auto sm:px-6">
        {/* Feature section */}
        <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
          <div
            className="mb-12 px-6 lg:px-8"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div className="mx-auto max-w-2xl sm:text-center flex flex-col items-center">
              <h2 className="mt-6 font-bold text-4xl text-gray-900 sm:text-5xl">
                Расчет удобрений за считанные минуты
              </h2>
            </div>
          </div>

          {/* steps */}
          <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
            <li className="md:flex-1" data-aos="fade-down" data-aos-delay="300">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-green-600">
                  Шаг 1
                </span>
                <span className="text-xl font-semibold">
                  Выберите культуру из списка
                </span>
                <span className="mt-2 text-zinc-700">
                  <img
                    src="./images/culture_list.png"
                    className="text-green-700 underline underline-offset-2"
                  />
                </span>
              </div>
            </li>
            <li className="md:flex-1" data-aos="fade-down" data-aos-delay="400">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-green-600">
                  Шаг 2
                </span>
                <span className="text-xl font-semibold">
                  Заполните параметры поля
                </span>
                <span className="mt-2 text-zinc-700">
                  <img
                    src="./images/wheat_calculations.png"
                    className="text-green-700 underline underline-offset-2"
                  />
                </span>
              </div>
            </li>
            <li className="md:flex-1" data-aos="fade-down" data-aos-delay="450">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-green-600">
                  Шаг 3
                </span>
                <span className="text-xl font-semibold">
                  Заполните сезонные показатели и нажмите "Рассчитать"
                </span>
                <span className="mt-2 text-zinc-700">
                  <img
                    src="./images/wheat_result.png"
                    className="text-green-700 underline underline-offset-2"
                  />
                </span>
              </div>
            </li>
          </ol>

          <div
            className="mx-auto max-w-6xl px-6 lg:px-8"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="/file-upload-preview.jpg"
                  alt="uploading preview"
                  width={1419}
                  height={732}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Features);
