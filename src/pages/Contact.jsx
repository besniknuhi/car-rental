import { Link } from "react-router-dom";
import BookingBanner from "../components/BookingBanner";
import "../styles/contact.css";
import {
  IconLocation,
  IconMail,
  IconMailOpened,
  IconPhone,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <>
      <section>
        <div className="bg">
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="bg-text">
              <h3>Our Team</h3>
              <p>
                <Link to="/">Home</Link> / Contact
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="contact-div">
          <div className="contact-div-text">
            <h2>Need additional information?</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <Link to="/">
              <IconPhone /> &nbsp; (123) 456-7869
            </Link>
            <Link to="/">
              <IconMail /> &nbsp; carrental@carmail.com
            </Link>
            <Link to="/">
              <IconLocation />
              &nbsp; Venice, Italy
            </Link>
          </div>
          <div className="contact-div-form">
            <form>
              <label>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder='E.g: "William Walker"'></input>

              <label>
                Email <b>*</b>
              </label>
              <input type="email" placeholder="youremail@example.com"></input>

              <label>
                Tell us about it <b>*</b>
              </label>
              <textarea placeholder="Write Here.."></textarea>

              <button type="submit">
                <IconMailOpened />
                &nbsp; Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <BookingBanner />
    </>
  );
}
