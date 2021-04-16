import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaChevronRight, FaChevronLeft, FaTrashAlt } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { offers } from "../data";

const Scan = () => {
  const location = useLocation();
  const id = location.pathname.substring(7);
  const offer = offers.filter((item) => item.id == id);

  const [images, setImages] = useState([]);

  const handleImage = () => {
    setImages([
      {
        image: "https://www.elancorebates.com/media/1557153670599.png",
        text: "Example.png",
      },
    ]);
  };
  return (
    <section className="section scan-section">
      <div className="progGroup">
        <div className="progBar offerBar"></div>
      </div>
      <h1 className="promo">My Purchase Details </h1>
      <p className="paraPromo">
        Upload a scan or photo of your original licensed veterinary invoice that
        includes the purchase of the product(s) that qualify for this rebate
        offer. Please reference the example invoice that highlights the
        information required for a valid rebate submission.
      </p>
      <p className="paraPromo">
        Skip this step if you prefer to send your receipt by mail or fax,
        further details will be provided on the confirmation page. Please note
        it will take longer to process your rebate if you choose not to upload a
        digital copy now.
      </p>

      <div className="row">
        <div className="scanDiv">
          <button className="imageBtn" onClick={handleImage}>
            Add Image
          </button>
          <p className="btn-text">
            Maximum 8 Images, File Type: JPEG, GIF, PNG, PDF, Maximum File Size:
            10 mb each
          </p>
          {images.map((item) => {
            return (
              <div className="row">
                <div>
                  <img style={{ float: "left" }} src={item.image}></img>
                  <div className="addImageTxt">{item.text}</div>
                  <div>
                    <FaTrashAlt />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p style={{ float: "right" }}>
          <img
            src="https://www.elancorebates.com/media/uploads/1607118902416.jpg"
            style={{ width: "420px" }}
          />
        </p>
      </div>

      <div className="greyBox">
        <button
          className="back-btn"
          onClick={() => {
            window.location.href = "/offers";
          }}
        >
          <span>
            <FaChevronLeft className="downabit " />
          </span>
          Back
        </button>
        <button className="form-btn">
          Continue
          <span>
            <FaChevronRight className="downabit " />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Scan;
