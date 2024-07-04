import { Link } from "react-router-dom";
import "../styles/about.css";
import Plan from "../components/Plan";
import aboutpic from "../images/about/aboutpic.jpg";
import icon1 from "../images/about/icon1.png";
import icon2 from "../images/about/icon2.png";
import icon3 from "../images/about/icon3.png";
import BookingBanner from "../components/BookingBanner";

export default function About() {
  return (
    <>
      <section className="about-page">
        <div className="bg">
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="bg-text">
              <h3>About</h3>
              <p>
                <Link to="/">Home</Link> / About
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-main">
            <img src={aboutpic} alt="" className="about-main-img" />
            <div className="about-main-text">
              <h3>About Our Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="about-main-icons">
                <div className="about-main-box">
                  <img src={icon1} alt="" />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main-box">
                  <img src={icon2} alt="" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main-box">
                  <img src={icon3} alt="" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Plan />
      <BookingBanner />
    </>
  );
}
