import React, { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const links = [
  {
    id: 1,
    title: "Элитный семенной материал",
    description: "Лучшие семена для максимального урожая",
    image: "./images/seeds_landing/image1.jpg",
    active: true,
  },
  {
    id: 2,
    title: "Инновационный семенной завод Петкус",
    description: "Технологии высокой чистоты и качества семян",
    image: "./images/seeds_landing/image2.jpg",
    active: false,
  },
  {
    id: 3,
    title: "Оптовые поставки",
    description: "Оперативные и надёжные поставки семян",
    image: "./images/seeds_landing/image3.jpg",
    active: false,
  },
  {
    id: 4,
    title: "Качество семян, не имеющее аналогов",
    description: "Уникальные семена, превосходящие стандарты",
    image: "./images/seeds_landing/image4.jpg",
    active: false,
  },
];

export default function Properties() {
  const [tab, setTab] = useState<number>(1);
  const [currentImage, setCurrentImage] = useState(links[0].image);

  const tabs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
    }
  }, []);

  const bgImage =
    "https://priroda.club/uploads/posts/2022-12/1670601410_priroda-club-p-krasivoe-pole-pshenitsi-krasivo-foto-15.jpg";

  const handleTabClick = (id, image) => {
    setTab(id);
    setCurrentImage(image);
  };

  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat"
      style={{
        minHeight: "100vh",
        maxHeight: "123vh",
        backgroundImage: `linear-gradient(rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 1)), url(${bgImage})`,
      }}
    >
      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-6"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="100"
      >
        <div className="pt-20 lg:pt-22">
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 sm:text-left mb-7">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    lineHeight: "normal",
                    alignSelf: "center",
                  }}
                >
                  <img
                    src="./images/seed.png"
                    alt="wheat-icon"
                    style={{ width: 50, height: 50 }}
                  />
                  <h1 className="mt-3 text-2xl font-mono font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    Семена.Элита
                  </h1>
                </Box>
              </div>
              <div className="mb-8 md:mb-0">
                {links.map((link) => (
                  <a
                    key={link.id}
                    className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== link.id
                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabClick(link.id, link.image);
                    }}
                  >
                    <div>
                      <div className="font-bold leading-snug tracking-tight mb-1">
                        {link.title}
                      </div>
                      <div className="text-gray-600">{link.description}</div>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                      <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="max-w-xl flex items-center md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:order-1 md:mt-6">
              <div className="relative hidden sm:block text-center lg:text-right pt-7 m-6">
                <div className="-m-4 rounded-md ring-white ring-8 lg:-m-4 transition-opacity duration-900">
                  <img
                    src={currentImage}
                    alt="Current Seed"
                    className="rounded-md ring-1 ring-white h-full max-h-full"
                    style={{
                      opacity: 0.5,
                      transition: "opacity 0.5s ease-in-out",
                    }}
                    onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
