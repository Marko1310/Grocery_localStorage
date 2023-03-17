import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const ContexWrapper = (props) => {
  const [edit, setEdit] = useState(false);
  return (
    <GlobalContext.Provider value={{ edit, setEdit }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
