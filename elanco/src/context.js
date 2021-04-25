import React, { useState, useContext, useEffect, useCallback } from "react";

const AppContext = React.createContext();
const getAccount = () => {
  let list = localStorage.getItem("account");
  if (list) {
    return JSON.parse(localStorage.getItem("account"));
  } else return [];
};
const AppProvider = ({ children }) => {
  const [selectedPet, setSelectedPet] = useState();
  const [alert, setAlert] = useState(true);
  const [account, setAccount] = useState(getAccount());
  const [selectedOffer, setSelectedOffer] = useState("error");
  const [images, setImages] = useState([]);
  const [selectReward, setSelectReward] = useState();
  const [donate, setDonate] = useState("None");
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
        setAlert,
        setAccount,
        setImages,
        setSelectedOffer,
        setSelectedPet,
        setDonate,
        setSelectReward,
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
