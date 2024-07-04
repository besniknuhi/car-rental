import { IconPhone } from "@tabler/icons-react";
import "../styles/bookingbanner.css";

export default function BookingBanner() {
  return (
    <div className="booking-banner">
      <div className="bb-overlay"></div>
      <div className="container">
        <div className="text-content">
          <h2>Book a car by getting in touch with us</h2>
          <span>
            <IconPhone width={40} height={40} />
            <h3>(123) 456-7869</h3>
          </span>
        </div>
      </div>
    </div>
  );
}
