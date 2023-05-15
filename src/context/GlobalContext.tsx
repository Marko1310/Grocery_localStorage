import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export const ContexWrapper = (props) => {
  // state for list of groceries
  const [grocerieList, setGrocerieList] = useState(() => {
    return JSON.parse(localStorage.getItem("groceries")) || [];
  });

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(grocerieList));
  }, [grocerieList]);

  // state for main input field
  const [input, setInput] = useState("");

  const globalObject = {
    grocerieList,
    setGrocerieList,
    input,
    setInput,
  };

  return (
    <GlobalContext.Provider value={globalObject}>
      {props.children}
    </GlobalContext.Provider>
  );
};
