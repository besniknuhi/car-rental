import { Link } from "react-router-dom";
import "../styles/team.css";
import BookingBanner from "../components/BookingBanner";
import img1 from "../images/team/1.png";
import img2 from "../images/team/2.png";
import img3 from "../images/team/3.png";

export default function Team() {
  return (
    <>
      <section>
        <div className="bg">
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="bg-text">
              <h3>Our Team</h3>
              <p>
                <Link to="/">Home</Link> / Our Team
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="team-container">
          <div className="team-container-box">
            <div className="team-box-img">
              <img src={img1} alt="" />
            </div>
            <div className="team-box-desc">
              <h3>Luke Miller</h3>
              <p>Manager</p>
            </div>
          </div>
          <div className="team-container-box">
            <div className="team-box-img">
              <img src={img2} alt="" />
            </div>
            <div className="team-box-desc">
              <h3>James Patel</h3>
              <p>Mechanic</p>
            </div>
          </div>
          <div className="team-container-box">
            <div className="team-box-img">
              <img src={img3} alt="" />
            </div>
            <div className="team-box-desc">
              <h3>Martin Rizz</h3>
              <p>Salesman</p>
            </div>
          </div>
        </div>
      </div>

      <BookingBanner />
    </>
  );
}
