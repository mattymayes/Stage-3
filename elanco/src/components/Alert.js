import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
const Alert = () => {
  const { alert, setAlert } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(true);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <div className={`${alert === true ? "error hide" : "error"}`}>{alert}</div>
  );
};

export default Alert;
