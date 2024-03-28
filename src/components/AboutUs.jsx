import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Welcome to Healthbooker, where your journey to better health begins! We understand the importance of easy access to healthcare, which is why we've created a platform that allows you to book appointments with trusted doctors effortlessly. Say goodbye to long waiting times and frustrating phone calls – with Healthbooker, you can schedule appointments with qualified medical professionals at your convenience. Whether you need to see a specialist or just need a check-up, our user-friendly interface makes it simple to find the right doctor for your needs. Take control of your health today and experience the convenience of seamless doctor-patient interaction. Your well-being is our priority, and we're here to empower you every step of the way. Join us on Healthbooker and start prioritizing your health with ease.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
