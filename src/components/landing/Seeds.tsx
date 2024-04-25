import React from "react";
import StartButton from "./ui/StartButton";
import Typography from "@mui/material/Typography/Typography";
import { Link } from "react-router-dom";

export default function Seeds() {
  return (
    <section style={{ position: "relative", height: "100vh" }}>
      <div
        data-aos-easing="ease-in-back"
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative max-w-6xl mx-auto p-4 py-24 md:pt-24">
        <div
          className="mx-auto py-10 bg-white/90 rounded-2xl shadow">
          <div className="relative max-w-6xl mx-auto p-4 grid grid-cols-12 gap-x-6">
            <div data-aos="fade-right" className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6">
              <h2 className="text-4xl font-semibold">Элитные Семена Кировского Завода</h2>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Эксклюзивность и Качество</h4>
                <p className="paragraph text-sm xl:text-base">
                  Специализированный селекционный отбор обеспечивает высочайшее качество семян, гарантируя урожайность без аналогов.
                </p>
              </div>
              <div className="space-y-2 hidden sm:block">
                <h4 className="text-lg font-medium">Инновации и Традиции</h4>
                <p className="paragraph text-sm xl:text-base">
                  Интеграция современных технологий с проверенными временем методиками позволяет достигнуть максимальной эффективности процесса выращивания.
                </p>
              </div>
              <div className="space-y-2 hidden sm:block">
                <h4 className="text-lg font-medium">Партнерство и Поддержка</h4>
                <p className="paragraph text-sm xl:text-base">
                  Каждому клиенту мы гарантируем персонализированную поддержку и сопровождение на всех этапах сотрудничества.
                </p>
              </div>
              <div className="space-y-2 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <StartButton component={Link} variant="contained" to={{ pathname: "/seeds" }} data-aos="fade-up" data-aos-delay="400">
                  <Typography textAlign="center">Подробнее</Typography>
                </StartButton>
              </div>
            </div>
            <div className="hidden lg:block col-span-12 lg:col-span-6  xl:mt-0">
              <img src="https://fksr.org/images/news/mcFaHn7vSlBBIbBUEeb48HjbYiQQhTX9Xl7Tt2miuh8f1fzseoDC_aqNdGHmGANLhAnRJMCrN1WMBV_4o6YIwZu4.jpg" className="h-full w-full rounded-2xl" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
