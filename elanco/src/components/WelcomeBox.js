import React, { useRef, useState, useEffect } from "react";
import { FaChevronRight, FaFontAwesomeLogoFull } from "react-icons/fa";
import { useGlobalContext } from "../context";
import validator from "validator";
import { offers } from "../data";
const WelcomeBox = () => {
  const { alert, setAlert } = useGlobalContext();

  const [offer, setOffer] = useState("");
  const [date, setDate] = useState("");
  const [disabled, setDisbaled] = useState(true);
  let temp = [];

  const validateDate = (value) => {
    if (validator.isDate(value)) {
      return true;
    } else {
      return false;
    }
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleOffer = (e) => {
    setOffer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (offer) {
      if (date) {
        if (validateDate(date) && temp[0]) {
          window.location.href = `offer/${offer}`;
        } else {
          setAlert(false);
        }
      }
    }
  };

  useEffect(() => {
    if (date) {
      if (validateDate(date)) {
        setDisbaled(false);
      } else {
        setDisbaled(true);
      }
    }
  }, [date]);

  useEffect(() => {
    temp = [];
    const compDate = Date.parse(date);

    temp = offers.filter(
      (item) =>
        item.id == offer &&
        compDate >= Date.parse(item.purchaseDates.start) &&
        compDate <= Date.parse(item.purchaseDates.end)
    );
  });
  return (
    <div className="welcome-container">
      <div className="welcome">
        <h2>Welcome to the Elanco Rebate Center</h2>
        <p className="welcome-text">
          To redeem your rebate*, enter your offer code and purchase date to
          begin. If you don’t know your offer code, view the list of available
          by just entering in the date.
        </p>
        <form onSubmit={date && handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="offerCode"
              name="offerCode"
              className="text-form"
              placeholder="Offer Code"
              value={offer}
              onChange={handleOffer}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="date"
              name="date"
              className="text-form"
              placeholder="Purchase Date"
              value={date}
              onChange={handleDate}
            ></input>
          </div>

          <button disabled={disabled} className={`${!date && "wash"} form-btn`}>
            Continue
            <span>
              <FaChevronRight className="downabit " />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeBox;
