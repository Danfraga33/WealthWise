import React, { useState } from 'react';
import DataContext from './DataContext';

const DataProvider = ({ children }) => {
	const [sharedData, setSharedData] = useState(initialData);

	return (
		<DataContext.Provider value={{ sharedData, setSharedData }}>
			{children}
		</DataContext.Provider>
	);
};
