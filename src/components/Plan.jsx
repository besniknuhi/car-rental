import "../styles/plan.css";
import icon1 from "../images/plan/icon1.png";
import icon2 from "../images/plan/icon2.png";
import icon3 from "../images/plan/icon3.png";

export default function Plan() {
  return (
    <section className="plan-section">
      <div className="container">
        <div className="plan-container">
          <div className="plan-container-title">
            <h3>Plan your trip now</h3>
            <h2>Quick & easy car rental</h2>
          </div>
          <div className="plan-container-boxes">
            <div className="plan-container-box">
              <img src={icon1} alt="icon-img" />
              <h3>Select Car</h3>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="plan-container-box">
              <img src={icon2} alt="icon-img" />
              <h3>Contact Operator</h3>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="plan-container-box">
              <img src={icon3} alt="icon-img" />
              <h3>Let's Drive</h3>
              <p>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
