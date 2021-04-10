import React, { useState, useContext, useEffect, useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [offer, setOffer] = useState("");
  const [date, setDate] = useState("");

  return (
    <AppContext.Provider value={(offer, date, setOffer, setDate)}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
