import React from "react";
import "./home.css"; // import CSS file

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('home-bg.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <img src="/eco-logo.png" alt="Logo" className="fixed-top-left" />

      <nav className="nav">
        <a href="/">HOME</a>
        <a href="/">ABOUT</a>
        <a href="/">SHOP</a>
        <a href="/">CONTACT</a>
      </nav>

      <div className="content-body">
        <div id="first-line">
          JOIN THE
          <img src="/Arrow 1.svg" alt="arrow-1" />
        </div>

        <div id="sec-line">CIRCULAR ECONOMY</div>

        <div id="third-line">
          <img src="/Arrow 2.svg" alt="arrow-2" />
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
