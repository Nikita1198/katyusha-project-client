import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Features from "../components/landing/Features";
import Сarousel from "../components/landing/Сarousel";
import Products from "../components/landing/Products";
import Container from "@mui/material/Container";

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
      <Сarousel onClick={() => scrollToRef(section2Ref)} />
      <Container component="main" maxWidth="lg">
        <Products ref={section2Ref} />
        <Features />
      </Container>
    </>
  );
}
