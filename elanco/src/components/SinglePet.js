import React from "react";

const SinglePet = ({ name, img, age, selected, onClick }) => {
  return (
    <div
      className={`singleClinic ${selected && "petSelect"}`}
      onClick={onClick}
    >
      <div className="clinicCol">
        <img src={img} width="100px" height="50px" />
      </div>
      <div className="clinicCol">{name}</div>
      <div className="clinicCol">{age} years old</div>
    </div>
  );
};

export default SinglePet;
