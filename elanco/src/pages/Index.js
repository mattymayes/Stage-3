import React, { useState, useEffect } from "react";
import WelcomeBox from "../components/WelcomeBox";

import { useGlobalContext } from "../context";
import { FaChevronRight } from "react-icons/fa";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else return [];
};
const getLocalPets = () => {
  let pets = localStorage.getItem("pets");
  if (pets) {
    return JSON.parse(localStorage.getItem("pets"));
  } else return [];
};
const Index = () => {
  const [form, setForm] = useState("");
  const [formAccount, setFormAccount] = useState({ email: "", password: "" });
  const [account, setAccount] = useState();
  const [signError, setSignError] = useState("");
  const [accounts, setAccounts] = useState(getLocalStorage());
  const [createError, setCreateError] = useState({
    missing: "",
    password: "",
    email: "",
  });
  const [myPets, setMyPets] = useState(getLocalPets());
  const [addingPet, setAddingPet] = useState(false);
  const [petImage, setPetImage] = useState();
  const [formPet, setFormPet] = useState({
    name: "",
    age: "",
    img: "",
    owner: "",
  });

  const [newAccount, setNewAccount] = useState({
    id: accounts.length + 1,
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    email: "",
    confirmEmail: "",
    street: "",
    apartment: "",
    zip: "",
    city: "",
    state: "",
  });
  const handleCreate = (type) => {
    {
      if (type === "create") {
        form === "create" ? setForm("") : setForm("create");
      } else if (type === "log") {
        form === "log" ? setForm("") : setForm("log");
      } else if (type === "pet") {
        form === "pet" ? setForm("") : setForm("pet");
      } else if (type === "edit") {
        form === "edit" ? setForm("") : setForm("edit");
      }
    }
  };
  const handleCreateAccount = (e) => {
    setCreateError({
      missing: "",
      password: "",
      email: "",
    });
    let tempError = createError;
    e.preventDefault();
    let misdemeanours = 0;

    if (!newAccount.firstName) {
      misdemeanours += 1;
      tempError.missing = "Please complete all required fields";
    }
    if (!newAccount.lastName) {
      misdemeanours += 1;
      tempError.missing = "Please complete all required fields";
    }
    if (!newAccount.password) {
      misdemeanours += 1;
      tempError.missing = "Please complete all required fields";
    }
    if (newAccount.password !== newAccount.confirmPassword) {
      misdemeanours += 1;
      tempError.password = "Your passwords do not match";
    }
    if (!newAccount.email) {
      misdemeanours += 1;
      tempError.missing = "Please complete all required fields";
    }
    if (newAccount.email !== newAccount.confirmEmail) {
      misdemeanours += 1;
      tempError.email = "Your emails do not match";
    }
    if (!newAccount.street) {
      misdemeanours += 1;
      tempError.missing = "Please complete all required fields";
    }
    if (!newAccount.state) {
      misdemeanours += 1;
      tempError.missing = "Please complete all required fields";
    }
    if (!newAccount.zip) {
      misdemeanours += 1;
      tempError.missing = "Please complete all required fields";
    }
    if (!newAccount.city) {
      misdemeanours += 1;
      tempError.missing = "Please complete all required fields";
    }

    if (misdemeanours === 0) {
      setAccount(newAccount);
      const tempAccounts = [...accounts, newAccount];
      setAccounts(tempAccounts);
      localStorage.setItem("list", JSON.stringify(tempAccounts));

      setNewAccount({
        id: accounts.length + 1,
        firstName: "",
        lastName: "",
        phone: "",
        password: "",
        confirmPassword: "",
        email: "",
        confirmEmail: "",
        street: "",
        apartment: "",
        zip: "",
        city: "",
        state: "",
      });
    }
    setCreateError({ ...createError, tempError });
    console.log(createError);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    if (!formAccount.email) {
      setSignError("Please Enter Your Email");
    } else if (!formAccount.password) {
      setSignError("Please Enter Your Password");
    } else {
      setSignError("Your Email or Password are Invalid");
    }
    const tempFormAccount = accounts.find(
      (item) =>
        item.email === formAccount.email &&
        item.password === formAccount.password
    );
    if (tempFormAccount) {
      setAccount(tempFormAccount);
    }
  };
  const handlePet = (e) => {
    setPetImage(e.target.files[0]);
  };
  useEffect(() => {
    if (petImage) {
      const temp = formPet;
      temp.img = petImage.name;
      setFormPet(temp);
    }
  }, [petImage]);
  const addPet = (e) => {
    e.preventDefault();
    const tempPets = [...myPets, formPet];
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

            {!account ? (
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
                  <p
                    className={`createError ${
                      createError.missing === "" && "hide"
                    }`}
                  >
                    {createError.missing}
                  </p>
                  <p
                    className={`createError ${
                      createError.password === "" && "hide"
                    }`}
                  >
                    {createError.password}
                  </p>
                  <p
                    className={`createError ${
                      createError.email === "" && "hide"
                    }`}
                  >
                    {createError.email}
                  </p>
                  <form onSubmit={handleCreateAccount}>
                    <div style={{ display: "flex" }}>
                      <div className="form-col">
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="First Name*"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.firstName = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                        <div className="form-group col-1">
                          <p>
                            <span className="formTag">Last Name*</span>
                          </p>
                          <input
                            className="text-form "
                            placeholder="Last Name*"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.lastName = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="Phone Number"
                            type="tel"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.phone = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="Password*"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.password = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="Confirm Password*"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.confirmPassword = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="Email Address*"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.email = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                        <div className="form-group col-1">
                          <input
                            className="text-form"
                            placeholder="Confirm Email Address*"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.confirmEmail = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-col">
                        <div className="form-group col-2">
                          <input
                            className="text-form"
                            placeholder="Street Address*"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.street = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                        <div className="form-group col-2">
                          <input
                            className="text-form"
                            placeholder="Apartment/Suite #"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.apartment = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                        <div className="form-group col-2">
                          <input
                            className="text-form"
                            placeholder="ZIP Code*"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.zip = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                        <div className="form-group col-2">
                          <input
                            className="text-form"
                            placeholder="City*"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.city = e.target.value;
                              setNewAccount(temp);
                            }}
                          />
                        </div>
                        <div className="form-group col-2">
                          <select
                            style={{ color: "#666" }}
                            className="text-form"
                            type="text"
                            onChange={(e) => {
                              const temp = newAccount;
                              temp.state = e.target.value;
                              setNewAccount(temp);
                            }}
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
                  <form onSubmit={handleSignin}>
                    <div
                      className="form-group"
                      style={{ width: "75%", margin: "auto" }}
                    >
                      <input
                        onChange={(e) => {
                          const temp = formAccount;
                          temp.email = e.target.value;
                          setFormAccount(temp);
                        }}
                        className="text-form"
                        placeholder="email address"
                        type="email"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{
                        width: "75%",
                        margin: "10px auto",
                      }}
                    >
                      <input
                        className="text-form"
                        placeholder="password"
                        onChange={(e) => {
                          const temp = formAccount;
                          temp.password = e.target.value;
                          setFormAccount(temp);
                        }}
                      />
                    </div>
                    <p>{signError}</p>
                    <button className="form-btn">Sign In</button>
                  </form>
                </div>
              </>
            ) : (
              <div className="logIn-column">
                <p className="logAlert">Welcome back, {account.firstName}</p>
                <div className="accountDiv">
                  <h3
                    className={`accountH3 ${form === "pet" && "blueify"} `}
                    onClick={() => handleCreate("pet")}
                  >
                    My Pets
                  </h3>
                  <h3
                    className={`accountH3 ${form === "edit" && "blueify"} `}
                    onClick={() => handleCreate("edit")}
                  >
                    Edit Details
                  </h3>
                </div>

                <div className={`create-account ${form !== "edit" && "hide"}`}>
                  lol
                </div>

                <div className={`create-account ${form !== "pet" && "hide"}`}>
                  <h2>Pets</h2>

                  {myPets.length === 0 ? (
                    <p className="logAlert">
                      You currently do not have any pets registered with Elanco
                    </p>
                  ) : (
                    <p></p>
                  )}
                  {!addingPet ? (
                    <button
                      style={{ marginTop: "0px" }}
                      className={`form-btn`}
                      onClick={() => setAddingPet(true)}
                    >
                      Add Pet
                    </button>
                  ) : (
                    <form className="petForm" onSubmit={addPet}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="text-form"
                          placeholder="Pet Name"
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="text-form"
                          placeholder="Pet Age"
                        ></input>
                      </div>
                      {formPet.img === "" ? (
                        <div
                          className="form-group"
                          style={{ overflow: "auto", border: "none" }}
                        >
                          <label for="file-pet" className="petLabel">
                            Add Image
                          </label>
                          <input
                            type="file"
                            id="file-pet"
                            onClick={handlePet}
                          ></input>
                        </div>
                      ) : (
                        <div
                          className="form-group"
                          style={{ overflow: "auto" }}
                        >
                          <p className="petP">{formPet.img}</p>
                          <img
                            className="petPic"
                            src={formPet.img}
                            width="40px"
                            height="20px"
                          />
                        </div>
                      )}

                      <button
                        style={{ marginTop: "0px" }}
                        className={`form-btn`}
                      >
                        Add
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
