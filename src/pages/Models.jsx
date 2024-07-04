import { Link } from "react-router-dom";
import "../styles/models.css";
import BookingBanner from "../components/BookingBanner";
import { IconCar, IconStar } from "@tabler/icons-react";
import CarImg1 from "../images/cars-big/audia1.jpg";
import CarImg2 from "../images/cars-big/golf6.jpg";
import CarImg3 from "../images/cars-big/toyotacamry.jpg";
import CarImg4 from "../images/cars-big/bmw320.jpg";
import CarImg5 from "../images/cars-big/benz.jpg";
import CarImg6 from "../images/cars-big/passatcc.jpg";

export default function Models() {
  return (
    <>
      <section>
        <div className="bg">
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="bg-text">
              <h3>Vehicle Models</h3>
              <p>
                <Link to="/">Home</Link> / Vehicle Models
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="models-div">
          <div className="models-div-box">
            <div className="models-div-img">
              <img src={CarImg1} alt="" />
              <div className="models-div-desc">
                <div className="models-all">
                  <div className="name">
                    <p>Audi A1</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="price">
                    <h4>$45</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="details">
                  <span>
                    <IconCar /> &nbsp; Audi
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <IconCar />
                  </span>
                </div>
                <div className="btn">
                  <Link to="/models">Book Ride</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="models-div-box">
            <div className="models-div-img">
              <img src={CarImg2} alt="" />
              <div className="models-div-desc">
                <div className="models-all">
                  <div className="name">
                    <p>Golf</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="price">
                    <h4>$37</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="details">
                  <span>
                    <IconCar /> &nbsp; VW
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <IconCar />
                  </span>
                </div>
                <div className="btn">
                  <Link to="/models">Book Ride</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="models-div-box">
            <div className="models-div-img">
              <img src={CarImg3} alt="" />
              <div className="models-div-desc">
                <div className="models-all">
                  <div className="name">
                    <p>Toyota Camry</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="price">
                    <h4>$30</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="details">
                  <span>
                    <IconCar /> &nbsp; Toyota
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <IconCar />
                  </span>
                </div>
                <div className="btn">
                  <Link to="/models">Book Ride</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="models-div-box">
            <div className="models-div-img">
              <img src={CarImg4} alt="" />
              <div className="models-div-desc">
                <div className="models-all">
                  <div className="name">
                    <p>BMW 320d</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="price">
                    <h4>$45</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="details">
                  <span>
                    <IconCar /> &nbsp; BMW
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <IconCar />
                  </span>
                </div>
                <div className="btn">
                  <Link to="/models">Book Ride</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="models-div-box">
            <div className="models-div-img">
              <img src={CarImg5} alt="" />
              <div className="models-div-desc">
                <div className="models-all">
                  <div className="name">
                    <p>Mercedes</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="price">
                    <h4>$50</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="details">
                  <span>
                    <IconCar /> &nbsp; Benz
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <IconCar />
                  </span>
                </div>
                <div className="btn">
                  <Link to="/models">Book Ride</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="models-div-box">
            <div className="models-div-img">
              <img src={CarImg6} alt="" />
              <div className="models-div-desc">
                <div className="models-all">
                  <div className="name">
                    <p>Passat</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="price">
                    <h4>$25</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className="details">
                  <span>
                    <IconCar /> &nbsp; VW
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Diesel &nbsp; <IconCar />
                  </span>
                </div>
                <div className="btn">
                  <Link to="/models">Book Ride</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingBanner />
    </>
  );
}
