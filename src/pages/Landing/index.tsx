import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./index.css";

type CarouselTextProps = {
  items: string[];
  intervalTime: number; // time in ms
};

function CarouselText({ items, intervalTime }: CarouselTextProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const loopInterval = setInterval(() => (
      setCurrent(current === items.length - 1 ? 0 : current + 1)
    ), intervalTime);

    return () => clearInterval(loopInterval);
  });

  return <h1 className="carousel">{items[current]}</h1>;
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
            items={["Minecraft", "Discord Bots", "Satisfactory", "Palworld", "Counter-Strike 2"]}
            intervalTime={2500}
          />
        </header>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
