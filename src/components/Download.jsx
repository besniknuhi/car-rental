import "../styles/download.css";
import img1 from "../images/download/googleapp.svg";
import img2 from "../images/download/appstore.svg";

export default function Download() {
  return (
    <section className="download-section">
      <div className="container">
        <div className="download-text">
          <h2>Download our app to get most out of it</h2>
          <p>
            Download our app to always be up to date with our new offers and
            services!
          </p>
          <div className="download-text-btns">
            <img src={img1} alt="downloadbutton" />
            <img src={img2} alt="downloadbutton" />
          </div>
        </div>
      </div>
    </section>
  );
}
