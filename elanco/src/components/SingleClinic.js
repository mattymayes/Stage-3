import React from "react";
import { FiSquare } from "react-icons/fi";
import { FaCheck, FaCheckSquare } from "react-icons/fa";

const SingleClinic = ({ clinic, onClick, selected }) => {
  const { accountName, address1, address2, zipcode } = clinic;
  return (
    <div
      className={`singleClinic ${selected && "selctedClinic"}`}
      onClick={onClick}
    >
      <div
        className="clinicCol"
        style={{
          width: "50px",
          marginLeft: "20px",
          marginTop: "12px",
          marginRight: "37px",
        }}
      >
        {selected ? (
          <FaCheckSquare
            style={{ width: "20px", height: "20px", color: "#0073CF" }}
          />
        ) : (
          <FiSquare style={{ width: "20px", height: "20px" }} />
        )}
      </div>
      <div className="clinicCol">
        <p>{accountName}</p>
      </div>
      <div className="clinicCol">
        <p style={{ marginBottom: "5px" }}>{address1}</p>
        <p style={{ marginTop: "5px", marginBottom: "15px" }}>{address2}</p>
      </div>
    </div>
  );
};

export default SingleClinic;
