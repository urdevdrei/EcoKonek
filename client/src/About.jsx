import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';
import Navbar from './Navbar';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <Navbar/>

      <div className="content-body">
        {/* FIRST ROW */}
        <div className="row">
          <div id="img-container" data-aos="fade-right" data-aos-delay="200">
            <img src="/images/about image.jpg" id="about-image" alt="About Us" />
          </div>

          <div id="about" data-aos="fade-left" data-aos-delay="200">
            <h1>ABOUT US</h1>
            <p id="about-paragraph">
              The EcoKonek application is designed to address the issues of waste generation and the lack of efficient recycling and reuse systems by implementing modern online marketplaces. The app offers sustainable solutions for waste management.
            </p>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="why-ecokonek">
          <div className="column" data-aos="fade-up">
            <div className="card" data-aos="zoom-in" data-aos-delay="100">
              <img src="/images/fast-shipping.jpg" id="about-image" alt="Fast Shipping" />
            </div>
            <div className="card" data-aos="zoom-in" data-aos-delay="200">
              <img src="/images/trusted.jpg" id="about-image" alt="Trusted" />
            </div>
          </div>

          <div className="center-text" data-aos="fade-up" data-aos-delay="300">
            <p className="why">WHY</p>
            <h1 className="ecokonek">ECOKONEK</h1>
          </div>

          <div className="column" data-aos="fade-up">
            <div className="card" data-aos="zoom-in" data-aos-delay="100">
              <img src="/images/ecokonek-trusted.jpg" id="about-image" alt="EcoKonek Trusted" />
            </div>
            <div className="card" data-aos="zoom-in" data-aos-delay="200">
              <img src="/images/admi.jpg" id="about-image" alt="Admin" />
            </div>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="third-row">
          <h1 id="title-team" data-aos="fade-down">OUR TEAM</h1>
          <div className="container">
            {/* Team Member 1 */}
            <TeamMember
              name="Paul Andrei L. Santos"
              role="Full Stack Developer"
              imgSrc="/images/img_2960.png"
              fb="https://www.facebook.com/Dreiisnts/"
              ig="https://www.instagram.com/dreiisnts/"
            />

            {/* Team Member 2 */}
            <TeamMember
              name="Kyle Adrian Santos"
              role="Full Stack Developer"
              imgSrc="images/home-bg.png"
              fb="https://www.facebook.com/leoncio.kyle"
              ig="https://www.instagram.com/santos__kyle/"
            />

            {/* Team Member 3 */}
            <TeamMember
              name="Jim Dale Abad"
              role="Full Stack Developer"
              imgSrc="images/home-bg.png"
              fb="https://www.facebook.com/jeydee.4"
              ig="https://www.instagram.com/iamjeyd_/"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

const TeamMember = ({ name, role, imgSrc, fb, ig }) => (
  <div className="team-member" data-aos="flip-left">
    <div className="box">
      <img src={imgSrc} className="img-team" alt={name} />
    </div>
    <h4 className="title">{name}</h4>
    <img src="/images/arrow-2.svg" alt="Arrow" />
    <p className="role">{role}</p>
    <div className="social-logos">
      <a href={fb}><img src="/images/fb-logo.png" className="logo" alt="Facebook" /></a>
      <a href={ig}><img src="/images/ig-logo.png" className="logo" alt="Instagram" /></a>
    </div>
  </div>
);


export default About;
