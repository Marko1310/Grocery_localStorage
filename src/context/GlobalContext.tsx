// react
import React, {createContext, useState, useEffect} from 'react';

// custom hooks
import {useLocalStorageState} from '../hooks/localStorageHook';

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
	const [grocerieList, setGrocerieList] = useLocalStorageState([], 'groceries');

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
