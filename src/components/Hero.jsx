import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/hero.css";
import shape from "../images/hero/hero-bg.png";
import car from "../images/hero/main-car.png";

export default function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <img className="bg-shape" src={shape} alt="" />
        <div className="hero-content">
          <div className="hero-content-text">
            <h4>Plan your trip now</h4>
            <h1>
              Save <span>big</span> with our car rental
            </h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="hero-content-text-btns">
              <Link onClick={bookBtn} className="text-btns-ride" to="/">
                Book Ride &nbsp; <IconCircleCheck />
              </Link>
              <Link className="text-btns-learn" to="/">
                Learn More &nbsp; <IconChevronRight />
              </Link>
            </div>
          </div>
          <img className="hero-content-car" src={car} alt="" />
        </div>
      </div>
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        ^
      </div>
    </section>
  );
}
