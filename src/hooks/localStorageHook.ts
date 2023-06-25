import {useEffect, useState} from 'react';

export function useLocalStorageState(initialState: [], key: string) {
	const [grocerieList, setGrocerieList] = useState(() => {
		const storedGroceries = localStorage.getItem(key);
		return storedGroceries ? JSON.parse(storedGroceries) : initialState;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(grocerieList));
	}, [grocerieList, key]);

	return [grocerieList, setGrocerieList];
}
