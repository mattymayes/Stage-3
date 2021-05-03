import React, { useState, useContext, useEffect, useCallback } from "react";

const AppContext = React.createContext();
const getAccount = () => {
  let list = localStorage.getItem("account");
  if (list) {
    return JSON.parse(localStorage.getItem("account"));
  }
};
const getAccount2 = () => {
  let list = localStorage.getItem("account");
  if (list) {
    return JSON.parse(localStorage.getItem("account"));
  } else return { selectedPet: 5000000, donate: "None", selectReward: 5000000 };
};
const AppProvider = ({ children }) => {
  const [selectedPet, setSelectedPet] = useState(getAccount2().selectedPet);
  const [alert, setAlert] = useState(true);
  const [account, setAccount] = useState(getAccount());
  const [selectedOffer, setSelectedOffer] = useState("error");
  const [images, setImages] = useState([]);
  const [selectReward, setSelectReward] = useState(getAccount2().selectReward);
  const [donate, setDonate] = useState(getAccount2().donate);
  const [text, setText] = useState("75090");
  return (
    <AppContext.Provider
      value={{
        alert,
        account,
        images,
        selectedOffer,
        selectedPet,
        donate,
        selectReward,
        text,
        setAlert,
        setAccount,
        setImages,
        setSelectedOffer,
        setSelectedPet,
        setDonate,
        setSelectReward,
        setText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
