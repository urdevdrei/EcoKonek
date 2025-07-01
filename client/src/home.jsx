import React from "react";
import "./home.css"; // import CSS file
import Navbar from './Navbar';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/home-bg.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <img src="/images/eco-logo.png" alt="Logo" className="fixed-top-left" />

      <Navbar id="home-nav" />

      <div className="home-body">
        <div id="first-line">
          JOIN THE
          <img src="/images/arrow-1.svg" alt="arrow-1" />
        </div>

        <div id="sec-line">CIRCULAR ECONOMY</div>

        <div id="third-line">
          <img src="/images/arrow-2.svg" alt="arrow-2" />
          Donate, Exchange, and Shop Sustainably
        </div>

        <div id="fourth-line">
          <button>EXPLORE MARKETPLACE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
