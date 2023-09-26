import React, { useState } from 'react';
import DataContext from './DataContext';

const DataProvider = ({ children }) => {
	// Define your shared data and any related functions here
	const [sharedData, setSharedData] = useState(initialData);

	return (
		<DataContext.Provider value={{ sharedData, setSharedData }}>
			{children}
		</DataContext.Provider>
	);
};
