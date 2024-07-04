import { IconQuote } from "@tabler/icons-react";
import "../styles/testimonials.css";
import pic1 from "../images/testimonials/pic1.jpg";
import pic2 from "../images/testimonials/pic2.jpg";

export default function TestimonialsComp() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-content-title">
            <h4>Reviewed by People</h4>
            <h2>Client's Testimonials</h2>
            <p>
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <div className="all-testimonials">
            <div className="all-testimonials-box">
              <span className="quotes-icon">
                <IconQuote width={60} height={60} />
              </span>
              <p>
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable."
              </p>
              <div className="all-testimonials-box-name">
                <div className="profile">
                  <img src={pic1} alt="user-img" />
                  <span>
                    <h4>James Hamilton</h4>
                    <p>Milan</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="all-testimonials-box box-2">
              <span className="quotes-icon">
                <IconQuote width={60} height={60} />
              </span>
              <p>
                "The car was in great condition and made our trip even better.
                Highly recommend for this car rental website!"
              </p>
              <div className="all-testimonials-box-name">
                <div className="profile">
                  <img src={pic2} alt="user-img" />
                  <span>
                    <h4>Davide Rossi</h4>
                    <p>Venice</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
