import { Button, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

function Features({}, ref) {
  return (
    <section ref={ref}>
      <div className="max-w-6xl mx-auto sm:px-5">
        <div className="mx-auto mb-12 py-2 md:pt-8 max-w-5xl">
          <div className="mb-12 py-8" data-aos="fade-down" data-aos-delay="200">
            <div className="mx-auto max-w-2xl sm:text-center flex flex-col items-center">
              <h2 className="mt-6 font-bold text-4xl text-gray-900 sm:text-5xl">
                Хотите попробовать?
              </h2>
              <h4 className="mt-3 font-bold text-2xl text-gray-900 sm:text-3xl">
                Расчет удобрений за считанные минуты
              </h4>
            </div>
          </div>

          <ol className="my-8 space-y-4 sm:pt-8 md:flex md:space-x-12 md:space-y-0">
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
            data-aos-delay="300"
          >
            <div className="mt-16 sm:mt-24 flex justify-center">
              <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="./images/wheat_resulltpage.png"
                  alt="uploading preview"
                  width={1219}
                  height={732}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
                <div className="flex flex-col overflow-hidden"></div>
              </div>
            </div>
          </div>
          <div className="mx-auto pt-10 sm:pt-16 max-w-none flex justify-center">
            <div data-aos="fade-down" data-aos-delay="300">
              <Button
                component={Link}
                variant="contained"
                to={{
                  pathname: "/cultures",
                }}
                sx={{
                  m: 1,
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
    </section>
  );
}

export default forwardRef(Features);
