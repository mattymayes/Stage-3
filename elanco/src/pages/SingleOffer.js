import React from "react";
import { ImCross } from "react-icons/im";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { offers } from "../data";

const SingleOffer = () => {
  const location = useLocation();
  const id = location.pathname.substring(7);
  const offer = offers.filter((item) => item.id == id);

  return (
    <section className="section">
      <div className="progGroup">
        <div className="progBar offerBar"></div>
      </div>
      <h1 className="promo">My Offer Details </h1>
      <p className="paraPromo">
        {console.log(offer[0].text)}
        Please acknowledge the terms and conditions for your selected offer
        before continuing the submission process
      </p>

      <div className="promoBox">
        <p className="promoHead">
          <span className="offerHeadText">Offer Number </span>
          {id}
        </p>
        <h2 className="promoh2">{offer[0].text}</h2>
        <div className="promoStuff">
          <p className="promoP">
            <strong className="promoStrong">Purchase Dates</strong> <br />
            {offer[0].readableDates.start} - {offer[0].readableDates.end}
          </p>
          <p className="promoP">
            <strong className="promoStrong">Submit By:</strong>
            <br />
            {offer[0].readableDates.submit}
          </p>
        </div>
      </div>
      <hr></hr>
      <span className="terms">
        Terms and Conditions: Offer valid for purchases dated{" "}
        {offer[0].readableDates.start} - {offer[0].readableDates.end} and
        requests must be received on or before {offer[0].readableDates.submit}.
        Limit 10 rebates per brand per household. This offer may not be combined
        with any other offer. To redeem your rebate, we require an original
        licensed veterinary invoice showing product(s) purchased from your
        veterinary clinic. Clinic information, product purchase(s) and date of
        purchase(s) must be clear and legible. Non-compliant materials will not
        be honored or returned. Elanco reserves the right to amend, substitute
        or withdraw this offer at any time without notice. Offer may be redeemed
        only by actual purchaser and pet owner who is 18 years or older. Offer
        is valid only in U.S and U.S Territories. Void where prohibited or
        restricted by law. All federal, state and local laws and regulations
        apply. Fraudulent submission of multiple requests and/or providing false
        information disqualifies any rebate request and could result in federal
        prosecution under mail fraud statutes (Title 18, USC Sections 1341 &
        1342) as well as applicable state laws. For rebate questions, call
        844-408-8476. By submitting your rebate, you agree to the Elanco Prepaid
        Mastercard Terms and Conditions and Expiration. You also acknowledge
        Elanco's Privacy Notice and Terms of Use.
      </span>
      <hr></hr>
      <a className="cancel" href="/">
        <ImCross className="smallify" />
        Cancel
      </a>
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

export default SingleOffer;
