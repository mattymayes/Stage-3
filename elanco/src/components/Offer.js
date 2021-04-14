import React, { useState } from "react";
import {
  FaCheckCircle,
  FaCircle,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

const Offer = ({ offer, index, isSelected, onClick }) => {
  const handleSelect = () => {};
  return (
    <div className={`offerPanel ${isSelected && " select"}`} onClick={onClick}>
      <div className="panelHead">
        <FaCircle style={{ width: "12" }} /> SELECT THIS REBATE
      </div>
      <div className="panelBody">
        <p>
          <strong>{offer.text}</strong>
        </p>
        <p>
          Purchase Dates: {offer.purchaseDates.start} -{" "}
          {offer.purchaseDates.end}{" "}
        </p>
        <p>Submit by: {offer.purchaseDates.submit}</p>
      </div>
    </div>
  );
};

export default Offer;
