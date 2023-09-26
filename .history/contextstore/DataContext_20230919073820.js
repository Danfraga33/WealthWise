import { createContext, useState } from 'react';

const CompoundContext = createContext({});

export function CompoundContextProvider(props) {
	const [sharedData, setSharedData] = useState({
		initialAmount: null,
		targetAmount: null,
		annualGrowthRate: null,
	});

	return (
		<CompoundContext.Provider value={context}>
			{props.children}
		</CompoundContext.Provider>
	);
}

export default CompoundContext;
