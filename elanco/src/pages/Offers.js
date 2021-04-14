import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { offers } from "../data";
import Offer from "../components/Offer";
import {
  FaCheckCircle,
  FaCircle,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

const Offers = () => {
  const [selected, setSelected] = useState(2);
  const location = useLocation();
  const date = Date.parse(location.pathname.substring(8));

  return (
    <section className="section">
      <h1 className="promo">My Eligible Offers</h1>
      <p className="paraPromo">
        Select the most relevant rebate offer below that applies to your recent
        purchase(s) and continue the submission process.
      </p>
      <p style={{ fontSize: "14px" }}>
        <strong>Purchase Date:</strong> {location.pathname.substring(8)}
      </p>
      {offers.map((offer, index) => {
        if (
          Date.parse(offer.purchaseDates.start) <= date &&
          Date.parse(offer.purchaseDates.submit) >= date
        )
          return (
            <Offer
              offer={offer}
              index={index}
              isSelected={selected === index ? true : false}
              onClick={() => setSelected(index)}
            />
          );
      })}
      <div className="greyBox">
        <button
          className="back-btn"
          onClick={() => {
            window.location.href = "/";
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

export default Offers;
