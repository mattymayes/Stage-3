import React from "react";
import { Rewards } from "../data";

const SingleReward = ({ message, img, name, index, selected, onClick }) => {
  return (
    <div
      className={`rewardCol ${selected && "selectReward"}`}
      onClick={onClick}
    >
      <div className="panelImg">
        <img src={img} alt="Offer Type" width="280px" height="180px" />
      </div>
      <h1 className="rewardName">{name}</h1>
      <p className="rewardP">
        <strong>{message}</strong>
      </p>
      <em className="rewardEm">
        Image above does not represent your actual rebate, this is intended only
        as an example.
      </em>
    </div>
  );
};

export default SingleReward;
