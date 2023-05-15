import React, { createContext, useState, useEffect } from 'react';

type Grocery = {
  title: string;
  id: number;
};

type GlobalContextType = {
  grocerieList: Grocery[];
  setGrocerieList: React.Dispatch<React.SetStateAction<Grocery[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const ContexWrapper = (props: React.PropsWithChildren<{}>) => {
  // state for list of groceries
  const [grocerieList, setGrocerieList] = useState(() => {
    const storedGroceries = localStorage.getItem('groceries');
    return storedGroceries ? JSON.parse(storedGroceries) : [];
  });

  useEffect(() => {
    localStorage.setItem('groceries', JSON.stringify(grocerieList));
  }, [grocerieList]);

  // state for main input field
  const [input, setInput] = useState('');

  const globalObject: GlobalContextType = {
    grocerieList,
    setGrocerieList,
    input,
    setInput,
  };

  return <GlobalContext.Provider value={globalObject}>{props.children}</GlobalContext.Provider>;
};
