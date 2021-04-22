import React, { useState, useContext, useEffect, useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [alert, setAlert] = useState(true);
  const [account, setAccount] = useState();
  return (
    <AppContext.Provider value={{ alert, account, setAlert, setAccount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
