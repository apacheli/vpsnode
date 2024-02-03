import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./index.css";

function Landing() {
  return (
    <>
      <Header />
      <div className="page-content">
        <header className="landing">
          <img src="/logo192.png" />
          <h1>The perfect hosting provider for <span>placeholder carousel text</span></h1>
          <a>Get Started</a>
        </header>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
