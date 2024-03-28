import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        Your health, our responsibility – at Healthbooker, this isn't just a slogan, it's our guiding principle. We're dedicated to providing you with the highest standard of care and support, because we understand that your well-being is paramount. From the moment you visit our platform, you'll experience a commitment to excellence that extends to every aspect of your healthcare journey.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
