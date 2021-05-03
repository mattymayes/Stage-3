import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Review = () => {
  const {
    account,
    selectedPet,
    images,
    selectReward,
    donate,
    selectedOffer,
  } = useGlobalContext();
  return (
    <section className="section">
      <div className="progGroup">
        <div className="progBar offerBar" style={{ width: "85.7%" }}></div>
      </div>
      <h1 className="promo">My Rebate Submission Summary</h1>
      <div className="reviewGroup">
        <div className="row">
          <div className="col">
            <h2>My Personal Details</h2>
          </div>

          <div className="edit">
            <small>Edit</small>
          </div>
        </div>
        <p>
          {account.firstName} {account.lastName}
        </p>
        <p>{account.email}</p>
        <p>{account.street}</p>
        <p>
          {account.city},{account.state}
        </p>
        <p>{account.zip}</p>
        <hr />
      </div>
      <div className="reviewGroup">
        <div className="row">
          <div className="col">
            <h2>My Pet Details</h2>
          </div>

          <div className="edit">
            <small>Edit</small>
          </div>
        </div>
        <p>{selectedPet.name}</p>
        <p>{selectedPet.age} years(s) old</p>
        <img src={selectedPet.img} width={"100px"} height="50px" alt="" />
        <hr />
      </div>
      <div className="reviewGroup">
        <div className="row">
          <div className="col">
            <h2>My Purchase Details</h2>
          </div>

          <div className="edit">
            <small>Edit</small>
          </div>
        </div>
        {images.map((image) => {
          return <p>{image.text}</p>;
        })}

        <hr />
      </div>
      <div className="reviewGroup">
        <div className="row">
          <div className="col">
            <h2>My Rebate Selection</h2>
            {selectReward === 1 ? (
              <p>Receive Card via Mail</p>
            ) : (
              <p>Receive Card via Email</p>
            )}
            {donate !== "None" && <p>{donate}</p>}
          </div>

          <div className="edit">
            <small>Edit</small>
          </div>
        </div>

        <hr />
      </div>
      <div className="reviewGroup">
        <div className="row">
          <div className="col">
            <h2>My Offer Details</h2>
            {
              <>
                <p>{selectedOffer[0].text}</p>
                <p>
                  {" "}
                  <span className="terms">Terms & Conditions</span>
                </p>

                <br />
                <span className="terms">
                  Terms and Conditions: Offer valid for purchases dated{" "}
                  {selectedOffer[0].purchaseDates.start} -{" "}
                  {selectedOffer[0].purchaseDates.end} and requests must be
                  received on or before {selectedOffer[0].purchaseDates.submit}.
                  Limit 10 rebates per brand per household. This offer may not
                  be combined with any other offer. To redeem your rebate, we
                  require an original licensed veterinary invoice showing
                  product(s) purchased from your veterinary clinic. Clinic
                  information, product purchase(s) and date of purchase(s) must
                  be clear and legible. Non-compliant materials will not be
                  honored or returned. Elanco reserves the right to amend,
                  substitute or withdraw this offer at any time without notice.
                  Offer may be redeemed only by actual purchaser and pet owner
                  who is 18 years or older. Offer is valid only in U.S and U.S
                  Territories. Void where prohibited or restricted by law. All
                  federal, state and local laws and regulations apply.
                  Fraudulent submission of multiple requests and/or providing
                  false information disqualifies any rebate request and could
                  result in federal prosecution under mail fraud statutes (Title
                  18, USC Sections 1341 & 1342) as well as applicable state
                  laws. For rebate questions, call 844-408-8476. By submitting
                  your rebate, you agree to the Elanco Prepaid Mastercard Terms
                  and Conditions and Expiration. You also acknowledge Elanco's
                  Privacy Notice and Terms of Use.
                </span>
              </>
            }
          </div>
        </div>

        <hr />
      </div>
      <div className="greyBox">
        <Link to={`/reward`} className="back-btn">
          <span>
            <FaChevronLeft className="downabit " />
          </span>
          Back
        </Link>

        <Link
          to={`/final`}
          className={`form-btn ${images.length === 0 && "disableLink"}`}
        >
          Submit
          <span></span>
        </Link>
      </div>
    </section>
  );
};

export default Review;
