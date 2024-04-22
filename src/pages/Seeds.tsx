import React from "react";
import { useProgressiveImage } from "../hooks/useProgressiveImage";

const delay = 60000;
const placeholder = "./images/wall2.jpeg";
const bgImage =
  "https://priroda.club/uploads/posts/2022-12/1670601410_priroda-club-p-krasivoe-pole-pshenitsi-krasivo-foto-15.jpg";

export default function Seeds() {
  const loaded = useProgressiveImage(bgImage);

  return <section
    className="relative bg-center bg-cover bg-no-repeat border-b-2 border-b-[#fff8e8]"
    style={{
      height: "123vh",
      backgroundImage: `linear-gradient(rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 0.05), rgba(255, 248, 232, 1)), url(${loaded || placeholder
        })`,
    }}
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="100"
    data-aos-offset="100"
  >
    <div className="container max-w-6xl mx-auto h-full">
    </div></section>;
}
