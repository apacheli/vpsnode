import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./index.css";

interface CarouselTextProps {
  items: string[];
}

function CarouselText({ items }: CarouselTextProps) {
  const [key, setKey] = useState(0);

  const scrolling = useSpring({
    from: {
      opacity: "0%",
      transform: "translateY(100%)"
    },
    to: {
      opacity: "100%",
      transform: "translateY(0%)"
    },
    reset: true,
    onRest: () => {
      setTimeout(() => {
        setKey(key === items.length - 1 ? 0 : key + 1);
      }, 2500);
    },
  });

  return (
    <div style={{ overflow: "hidden" }}>
      <animated.h1 key={key} className="carousel" style={scrolling}>{items[key]}</animated.h1>
    </div>
  );
}

function Landing() {
  return (
    <>
      <Header />
      <div className="page-content">
        <header className="landing">
          <img src="/logo256.png" />
          <h1>The perfect hosting provider for</h1>
          <CarouselText
            items={[
              "Minecraft",
              "Discord Bots",
              "Satisfactory",
              "Palworld",
              "Counter-Strike 2"
            ]}
          />
          <div className="landing-buttons">
            <a href="/" className="open-panel open-panel-footer">Get Started</a>
            <a href="/" className="open-panel open-panel-footer">Pricing</a>
          </div>
        </header>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
