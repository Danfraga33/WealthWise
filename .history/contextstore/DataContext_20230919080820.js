import { createContext, useState } from 'react';

const CompoundContext = createContext({
	initialAmount: null,
	targetAmount: null,
	annualGrowthRate: null,
});

export function CompoundContextProvider(props) {
	const [sharedData, setSharedData] = useState({
		initialAmount: null,
		targetAmount: null,
		annualGrowthRate: null,
	});

	return (
		<CompoundContext.Provider value={sharedData}>
			{props.children}
		</CompoundContext.Provider>
	);
}

export default CompoundContext;
