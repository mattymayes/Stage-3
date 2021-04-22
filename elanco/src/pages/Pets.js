import React, { useState } from "react";
import { useGlobalContext } from "../context";
import SinglePet from "../components/SinglePet";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const getLocalPets = () => {
  let pets = localStorage.getItem("pets");
  if (pets) {
    return JSON.parse(localStorage.getItem("pets"));
  } else return [];
};
const getAccount = () => {
  let list = localStorage.getItem("account");
  if (list) {
    return JSON.parse(localStorage.getItem("account"));
  } else return [];
};
const Pets = () => {
  const [selected, setSelected] = useState();
  const [pets, setPets] = useState(
    getLocalPets().filter((pet) => pet.owner === getAccount().email)
  );
  const location = useLocation();
  const id = location.pathname.substring(5);

  return (
    <section className="section">
      <div className="progGroup">
        <div className="progBar offerBar" style={{ width: "50%" }}></div>
      </div>
      <h1 className="promo">My Pets</h1>
      <p className="paraPromo">
        Please choose one of your pets, or add another
      </p>
      {pets.map((pet, index) => (
        <SinglePet
          {...pet}
          selected={selected === index ? true : false}
          onClick={() => setSelected(index)}
        />
      ))}
      <div className="greyBox">
        <Link to={`/offer/${id}`} className="back-btn">
          <span>
            <FaChevronLeft className="downabit " />
          </span>
          Back
        </Link>
        <Link
          to={`/reward`}
          className="form-btn"
          onClick={() => {
            localStorage.setItem("pet", JSON.stringify(pets[selected]));
          }}
        >
          Continue
          <span>
            <FaChevronRight className="downabit " />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Pets;
