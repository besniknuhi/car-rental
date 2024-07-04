import { useState } from "react";
import "../styles/pick.css";

export default function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>

          <div className="pick-description">
            <div className="pick-description-price">
              <span>${car.price}</span>/ rent per day
            </div>
            <div className="pick-description-table">
              <div className="pick-description-table-col">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="pick-description-table-col">
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className="pick-description-table-col">
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description-table-col">
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description-table-col">
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className="pick-description-table-col">
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description-table-col">
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>

            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
