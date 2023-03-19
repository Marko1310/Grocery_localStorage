import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const ContexWrapper = (props) => {
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState(false);

  return (
    <GlobalContext.Provider value={{ edit, setEdit, alert, setAlert }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
