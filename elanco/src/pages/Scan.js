import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaChevronRight, FaChevronLeft, FaTrashAlt } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import { useGlobalContext } from "../context";
import { offers } from "../data";

import receipt from "../images/Example Reciept.png";

const Scan = () => {
  const {
    selectedOffer,
    images,
    setImages,
    setAlert,
    setText,
  } = useGlobalContext();

  const handleImage = (e) => {
    console.log(e.target.files[0].name.split(".")[1]);
    if (
      e.target.files[0].name === "Example.jpg" ||
      e.target.files[0].name === "Example2.JPG"
    ) {
      if (e.target.files[0].name === "Example2.JPG") {
        setText();
      }
      setImages([
        {
          image: e.target.files[0].name,
          text: e.target.files[0].name,
        },
      ]);
    } else if (e.target.files[0].name.split(".")[1] !== "jpg") {
      setAlert("File uploaded must be an image");
    } else setAlert("Can't regognize the recipt");
  };

  return (
    <section className="section scan-section">
      <div className="progGroup">
        <div className="progBar offerBar" style={{ width: "28.5%" }}></div>
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
          <div className="addDiv">
            {" "}
            <label htmlFor="file-scan" className="imageBtn">
              {" "}
              Add Image
              <FiCamera />
            </label>
            <input
              type="file"
              id="file-scan"
              onChange={handleImage}
              placeholder="Add Image"
            ></input>
          </div>

          <p className="btn-text">
            Maximum 8 Images, File Type: JPEG, GIF, PNG, PDF, Maximum File Size:
            10 mb each
          </p>
          {images.map((item) => {
            return (
              <div className="row">
                <div>
                  <img
                    style={{ float: "left", width: "40px" }}
                    src={item.image}
                  ></img>
                  <div className="addImageTxt">{item.text}</div>
                  <div>
                    <FaTrashAlt onClick={() => setImages([])} />
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
        <Link to={`/offer/${selectedOffer[0].id}`} className="back-btn">
          <span>
            <FaChevronLeft className="downabit " />
          </span>
          Back
        </Link>

        <Link
          to={`/clinic/${selectedOffer[0].id}`}
          className={`form-btn ${images.length === 0 && "disableLink"}`}
        >
          Continue
          <span>
            <FaChevronRight className="downabit " />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Scan;
