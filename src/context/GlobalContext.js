import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const ContexWrapper = (props) => {
  // state for list of groceries
  const [grocerieList, setGrocerieList] = useState(() => {
    return JSON.parse(localStorage.getItem("groceries")) || [];
  });

  // state for main input field
  const [input, setInput] = useState("");

  // state for edit field
  const [inputEdit, setInputEdit] = useState("");

  // state for current element
  const [currentID, setCurrentID] = useState("");

  // state when the product is being edited
  const [edit, setEdit] = useState(false);

  // alert pop up
  const [alert, setAlert] = useState(false);

  const globalObject = {
    grocerieList,
    setGrocerieList,
    input,
    setInput,
    inputEdit,
    setInputEdit,
    currentID,
    setCurrentID,
    edit,
    setEdit,
    alert,
    setAlert,
  };

  return (
    <GlobalContext.Provider value={globalObject}>
      {props.children}
    </GlobalContext.Provider>
  );
};
