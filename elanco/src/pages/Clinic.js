import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft, FaTrashAlt } from "react-icons/fa";
import { clinics } from "../data";
import SingleClinic from "../components/SingleClinic";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Clinic = () => {
  const [activeClinics, setActiveClinics] = useState([]);
  const [text, setText] = useState("75090");
  const [selected, setSelected] = useState();
  const location = useLocation();
  const id = location.pathname.substring(8);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(id);
    const newClinics = clinics.filter((clinic) => clinic.zipcode === text);
    setActiveClinics(newClinics);
    setSelected();
  };
  useEffect(() => {
    const newClinics = clinics.filter((clinic) => clinic.zipcode === text);
    setActiveClinics(newClinics);
    setSelected(1);
  }, []);

  return (
    <section className="section">
      <div className="progGroup">
        <div className="progBar offerBar" style={{ width: "33%" }}></div>
      </div>
      <h1 className="promo">My Clinic Details </h1>
      <p className="paraPromo">
        Look up the clinic where you purchased the product(s) by searching its
        zip code.
      </p>
      <div className="clinicZip">
        <strong className="clinicGood">
          This is the clinic we got from your recipt, if this is correct, press
          continue
        </strong>
        <form className="clinicForm" onSubmit={handleSearch}>
          <div className="form-group" style={{ width: "50%" }}>
            <input
              className="text-form"
              placeholder="zipcode"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></input>
          </div>
          <button className={`form-btn`}>
            Search
            <span>
              <FaChevronRight className="downabit " />
            </span>
          </button>
        </form>
      </div>
      {activeClinics.length > 0 ? (
        <div className="clinicGrid">
          <div className="clinicCol" style={{ marginLeft: "110px" }}>
            <span>Account name</span>
          </div>
          <div className="clinicCol">
            <span>Address</span>
          </div>
        </div>
      ) : (
        <strong className="clinicError">
          Unable to locate a clinic for that zip code. Please try searching
          another zip code
        </strong>
      )}
      {activeClinics.map((clinic, index) => {
        return (
          <SingleClinic
            key={clinic.accountName}
            clinic={clinic}
            selected={selected === index ? true : false}
            onClick={() => setSelected(index)}
          />
        );
      })}

      <div className="greyBox">
        <button
          className="back-btn"
          onClick={() => {
            window.location.href = `/scan/${id}`;
          }}
        >
          <span>
            <FaChevronLeft className="downabit " />
          </span>
          Back
        </button>
        <Link to={`/pets`} className="form-btn">
          Continue
          <span>
            <FaChevronRight className="downabit " />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Clinic;
