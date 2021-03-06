import React, { useRef, useState, useEffect } from "react";
import { FaChevronRight, FaFontAwesomeLogoFull } from "react-icons/fa";
import { useGlobalContext } from "../context";
import validator from "validator";
import { offers } from "../data";
import { Link, Redirect, useHistory } from "react-router-dom";

const WelcomeBox = () => {
  const linkyBoi = useHistory();
  const { alert, setAlert, account, setSelectedOffer } = useGlobalContext();

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

    localStorage.setItem("account", JSON.stringify(account));

    if (offer) {
      if (date) {
        if (validateDate(date) && temp[0]) {
          linkyBoi.push(`offer/${offer}`);
        } else {
          setAlert("No offer found");
        }
      }
    } else if (date && !offer) {
      linkyBoi.push(`offers/${date}`);
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
    offers.map((item) => {});

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
