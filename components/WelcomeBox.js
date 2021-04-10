import { useState } from "react";

const WelcomeBox = () => {
  const [showForm, setShowForm] = useState(false);
  const onSearch = () => {
    setShowForm(!showForm);
  };

  return (
    <div id="rebateStart">
      <div className="container">
        <div id="welcomeBox">
          <h2>Welcome to the Elanco Rebate Center</h2>
          <p className="paraclass">
            To redeem your rebate*, enter your offer code and purchase date to
            begin. If you don’t know your offer code, view the list of available
            rebates to find the offer that corresponds with your purchase(s).
          </p>
          <button></button>
          {showForm ? <Form /> : null}
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  <div>
    <div className="formGroup">
      <input type="text" placeholder="Offer Code"></input>
    </div>
    <div className="formGroup">
      <input type="text" placeholder="Purchase Date"></input>
    </div>
    <div className="row">
      <div className="pullRight">
        <button class="continue" text="Search by offer code"></button>
      </div>
    </div>
  </div>;
};

export default WelcomeBox;
