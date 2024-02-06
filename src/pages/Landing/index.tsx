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
    const loopInterval = setInterval(() => {
      console.log("Changing text");
      if (!items[current + 1]) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, intervalTime);

    return () => clearInterval(loopInterval);
  });

  return <span>{items[current]}</span>;
}

function Landing() {
  return (
    <>
      <Header />
      <div className="page-content">
        <header className="landing">
          <img src="/logo192.png" />
          <h1>
            The perfect hosting provider for{" "}
            <CarouselText
              items={["Minecraft", "Satisfactory", " Discord Bots"]}
              intervalTime={3500}
            />
          </h1>
          <a>Get Started</a>
        </header>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
