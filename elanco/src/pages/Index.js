import React, { useState } from "react";
import WelcomeBox from "../components/WelcomeBox";
import { useGlobalContext } from "../context";

const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [form, setForm] = useState("create");
  const handleCreate = (type) => {
    {
      if (type === "create") {
        form === "create" ? setForm("") : setForm("create");
      } else {
        form === "log" ? setForm("") : setForm("log");
      }
    }
  };
  return (
    <>
      <section className="container  ">
        <div className="dog-bg">
          <WelcomeBox />
        </div>
        <div className="logIn-section">
          <div className="logIn-column">
            <h2 style={{ marginBottom: "10px" }}>
              <strong style={{ fontSize: "32px" }}>Your Account</strong>
            </h2>
            {!loggedIn ? (
              <>
                <p className="logAlert">You are not currently signed in</p>
                <div className="accountDiv">
                  <h3
                    className={`accountH3 ${form === "log" && "blueify"} `}
                    onClick={() => handleCreate("log")}
                  >
                    Log in
                  </h3>
                  <h3
                    className={`accountH3 ${form === "create" && "blueify"} `}
                    onClick={() => handleCreate("create")}
                  >
                    Create Account
                  </h3>
                </div>
                <div
                  className={`create-account ${form !== "create" && "hide"}`}
                >
                  <h2>Creating Account</h2>
                  <form>
                    <div style={{ display: "flex" }}>
                      <div className="form-col">
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="First Name*"
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form "
                            placeholder="Last Name*"
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="Password*"
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="Confirm Password*"
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="Email Address*"
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="Confirm Email Address*"
                          />
                        </div>
                      </div>
                      <div className="form-col">
                        <div className="form-group col-2">
                          <input
                            className="text-form"
                            placeholder="Street Address*"
                          />
                        </div>
                        <div className="form-group col-2">
                          <input
                            className="text-form"
                            placeholder="Apartment/Suite #"
                          />
                        </div>
                        <div className="form-group col-2">
                          <input
                            className="text-form"
                            placeholder="ZIP Code*"
                          />
                        </div>
                        <div className="form-group col-2">
                          <input className="text-form" placeholder="City*" />
                        </div>
                        <div className="form-group col-2">
                          <select
                            style={{ color: "#666" }}
                            className="text-form"
                            type="text"
                          >
                            <option value="" selected="selected">
                              State*
                            </option>
                            <option label="Alabama" value="AL">
                              Alabama
                            </option>
                            <option label="Alaska" value="AK">
                              Alaska
                            </option>
                            <option label="American Samoa" value="AS">
                              American Samoa
                            </option>
                            <option label="Arizona" value="AZ">
                              Arizona
                            </option>
                            <option label="Arkansas" value="AR">
                              Arkansas
                            </option>
                            <option label="California" value="CA">
                              California
                            </option>
                            <option label="Colorado" value="CO">
                              Colorado
                            </option>
                            <option label="Connecticut" value="CT">
                              Connecticut
                            </option>
                            <option label="Delaware" value="DE">
                              Delaware
                            </option>
                            <option label="District Of Columbia" value="DC">
                              District Of Columbia
                            </option>
                            <option
                              label="Federated States Of Micronesia"
                              value="FM"
                            >
                              Federated States Of Micronesia
                            </option>
                            <option label="Florida" value="FL">
                              Florida
                            </option>
                            <option label="Georgia" value="GA">
                              Georgia
                            </option>
                            <option label="Guam" value="GU">
                              Guam
                            </option>
                            <option label="Hawaii" value="HI">
                              Hawaii
                            </option>
                            <option label="Idaho" value="ID">
                              Idaho
                            </option>
                            <option label="Illinois" value="IL">
                              Illinois
                            </option>
                            <option label="Indiana" value="IN">
                              Indiana
                            </option>
                            <option label="Iowa" value="IA">
                              Iowa
                            </option>
                            <option label="Kansas" value="KS">
                              Kansas
                            </option>
                            <option label="Kentucky" value="KY">
                              Kentucky
                            </option>
                            <option label="Louisiana" value="LA">
                              Louisiana
                            </option>
                            <option label="Maine" value="ME">
                              Maine
                            </option>
                            <option label="Marshall Islands" value="MH">
                              Marshall Islands
                            </option>
                            <option label="Maryland" value="MD">
                              Maryland
                            </option>
                            <option label="Massachusetts" value="MA">
                              Massachusetts
                            </option>
                            <option label="Michigan" value="MI">
                              Michigan
                            </option>
                            <option label="Minnesota" value="MN">
                              Minnesota
                            </option>
                            <option label="Mississippi" value="MS">
                              Mississippi
                            </option>
                            <option label="Missouri" value="MO">
                              Missouri
                            </option>
                            <option label="Montana" value="MT">
                              Montana
                            </option>
                            <option label="Nebraska" value="NE">
                              Nebraska
                            </option>
                            <option label="Nevada" value="NV">
                              Nevada
                            </option>
                            <option label="New Hampshire" value="NH">
                              New Hampshire
                            </option>
                            <option label="New Jersey" value="NJ">
                              New Jersey
                            </option>
                            <option label="New Mexico" value="NM">
                              New Mexico
                            </option>
                            <option label="New York" value="NY">
                              New York
                            </option>
                            <option label="North Carolina" value="NC">
                              North Carolina
                            </option>
                            <option label="North Dakota" value="ND">
                              North Dakota
                            </option>
                            <option label="Northern Mariana Islands" value="MP">
                              Northern Mariana Islands
                            </option>
                            <option label="Ohio" value="OH">
                              Ohio
                            </option>
                            <option label="Oklahoma" value="OK">
                              Oklahoma
                            </option>
                            <option label="Oregon" value="OR">
                              Oregon
                            </option>
                            <option label="Palau" value="PW">
                              Palau
                            </option>
                            <option label="Pennsylvania" value="PA">
                              Pennsylvania
                            </option>
                            <option label="Puerto Rico" value="PR">
                              Puerto Rico
                            </option>
                            <option label="Rhode Island" value="RI">
                              Rhode Island
                            </option>
                            <option label="South Carolina" value="SC">
                              South Carolina
                            </option>
                            <option label="South Dakota" value="SD">
                              South Dakota
                            </option>
                            <option label="Tennessee" value="TN">
                              Tennessee
                            </option>
                            <option label="Texas" value="TX">
                              Texas
                            </option>
                            <option label="Utah" value="UT">
                              Utah
                            </option>
                            <option label="Vermont" value="VT">
                              Vermont
                            </option>
                            <option label="Virgin Islands" value="VI">
                              Virgin Islands
                            </option>
                            <option label="Virginia" value="VA">
                              Virginia
                            </option>
                            <option label="Washington" value="WA">
                              Washington
                            </option>
                            <option label="West Virginia" value="WV">
                              West Virginia
                            </option>
                            <option label="Wisconsin" value="WI">
                              Wisconsin
                            </option>
                            <option label="Wyoming" value="WY">
                              Wyoming
                            </option>
                            <option
                              label="Armed Forces - Europe/Africa/Canada"
                              value="AE"
                            >
                              Armed Forces - Europe/Africa/Canada
                            </option>
                            <option label="Armed Forces Pacific" value="AP">
                              Armed Forces Pacific
                            </option>
                            <option label="Armed Forces Americas" value="AA">
                              Armed Forces Americas
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="form-btn">Create Account</button>
                  </form>
                </div>
                <div className={`sign-in ${form !== "log" && "hide"}`}>
                  <h2>Signing In</h2>
                  <form>
                    <div
                      className="form-group"
                      style={{ width: "75%", margin: "auto" }}
                    >
                      <input
                        className="text-form"
                        placeholder="email address"
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{
                        width: "75%",
                        margin: "10px auto",
                      }}
                    >
                      <input className="text-form" placeholder="password" />
                    </div>
                    <button className="form-btn">Sign In</button>
                  </form>
                </div>
              </>
            ) : (
              <p className="logAlert">Welcome back</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
