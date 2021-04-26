import React, { useContext, useEffect, useState } from "react";
import SingleReward from "../components/SingleReward";
import { Rewards } from "../data";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Reward = () => {
  const {
    donate,
    account,
    setDonate,
    setAccount,
    selectReward,
    setSelectReward,
  } = useGlobalContext();

  useEffect(() => {
    const temp = account;
    temp.donate = donate;
    temp.selectReward = selectReward;
    setAccount(temp);
    localStorage.setItem("account", JSON.stringify(account));
  }, [donate, selectReward]);
  return (
    <section className="section">
      <div className="progGroup">
        <div className="progBar offerBar" style={{ width: "33%" }}></div>
      </div>
      <h1 className="promo">My Rebate Selection</h1>
      <p className="parapromo" style={{ marginBottom: "10px" }}>
        You can redeem your rebate in different ways. Choose how you would like
        to receive your rebate from the options below. You may select a virtual
        or physical prepaid card and/or a charitable donation.
      </p>
      <div className="row flex">
        {Rewards.map((reward, index) => (
          <SingleReward
            {...reward}
            index={index}
            selected={selectReward === index ? true : false}
            onClick={() => setSelectReward(index)}
          />
        ))}
      </div>
      <hr></hr>
      <div className={`donatePanel ${donate !== "None" && "selectReward"}`}>
        <div className="donateCol">
          <h1>Optional Donation to K9s For Warriors</h1>
          <span className="donateSpan">
            If you’d like to donate partial or full amount of your rebate to K9s
            For Warriors, please choose the amount you wish to be deducted from
            your rebate total below. The remaining rebate funds will be
            delivered on an Elanco Virtual or Physical Prepaid Mastercard.
            Donations will be made in Elanco's name not in your name and you
            will not receive a tax benefit.
          </span>
          <div className="form-group">
            <select
              onChange={(e) => setDonate(e.target.value)}
              name="donationAmount"
              id="donationAmount"
              style={{ color: "#666", marginTop: "10px" }}
              className="text-form"
              type="text"
            >
              <option value="None" selected={donate === "none" && "selected"}>
                Choose Donation Amount
              </option>
              <option value="$1.00" selected={donate === "$1.00" && "selected"}>
                $1.00
              </option>
              <option value="$2.00" selected={donate === "$2.00" && "selected"}>
                $2.00
              </option>
              <option value="$3.00" selected={donate === "$3.00" && "selected"}>
                $3.00
              </option>
              <option value="$4.00" selected={donate === "$4.00" && "selected"}>
                $4.00
              </option>
              <option value="$5.00" selected={donate === "$5.00" && "selected"}>
                $5.00
              </option>
              <option
                value="Donate Full Amount"
                selected={donate === "Donate Full Amount" && "selected"}
              >
                Donate Full Amount
              </option>
            </select>
          </div>
        </div>
        <div className="donateCol">
          <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <img
              src="https://www.elancorebates.com//media/1608068766898.jpg"
              width="300px"
              height="200px"
            />
          </div>

          <p>
            Elanco supports K9s For Warriors, a nonprofit organization that
            pairs specially trained shelter dogs with veterans suffering from
            post-traumatic stress disorder, traumatic brain injury and/or
            military sexual trauma as a result of military service post-9/11.
            Service dogs help where medications often fail, so warriors can
            return to civilian life with dignity and independence.
          </p>
        </div>
      </div>
      <div className="greyBox">
        <Link to={`/pets`} className="back-btn">
          <span>
            <FaChevronLeft className="downabit " />
          </span>
          Back
        </Link>
        <Link to={`/review`} className="form-btn">
          Continue
          <span>
            <FaChevronRight className="downabit " />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Reward;
