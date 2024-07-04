import { Link } from "react-router-dom";
import BookingBanner from "../components/BookingBanner";
import TestimonialsComp from "../components/TestimonialsComp";

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="bg">
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="bg-text">
              <h3>Testimonials</h3>
              <p>
                <Link to="/">Home</Link> / Testimonials
              </p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsComp />
      <BookingBanner />
    </>
  );
}
