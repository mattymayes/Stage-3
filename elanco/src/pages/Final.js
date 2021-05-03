import React from "react";
import { Link } from "react-router-dom";
import { FiPrinter } from "react-icons/fi";
import { IoMdRefresh } from "react-icons/io";
const Final = () => {
  return (
    <section className="section">
      <h1 className="promo">Thank You for Your Rebate Submission</h1>
      <p className="parapromo">
        Your rebate submission is on its way to us. We’ll be in touch soon.
      </p>
      <h1 className="promo">Tracking Number 957995278</h1>
      <p className="parapromo">
        Keep your tracking number safe. Track your rebate submission for updates
        on your rebate status.
      </p>
      <Link style={{ background: "#0067b1" }} className="imageBtn confirmBtn">
        <span className="iconSpan">
          <FiPrinter />
        </span>
        Print Rebate Summary
      </Link>
      <Link className="imageBtn confirmBtn" to="/">
        {" "}
        <span className="iconSpan">
          <IoMdRefresh />
        </span>
        Start Another Rebate
      </Link>
    </section>
  );
};

export default Final;
