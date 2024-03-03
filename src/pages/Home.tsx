import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";

export default function Home() {
  const section2Ref = React.useRef(null);

  const scrollToRef = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <Hero onClick={() => scrollToRef(section2Ref)} />
      <Features ref={section2Ref} />
    </>
  );
}
