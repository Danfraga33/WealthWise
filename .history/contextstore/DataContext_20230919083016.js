import { createContext, useState } from 'react';

const CompoundContext = createContext({
	initialAmount: null,
	targetAmount: null,
	annualGrowthRate: null,
});

export function CompoundContextProvider(props) {
	const [initialAmount, setInitialAmount] = useState(null);
	const [targetAmount, setTargetAmount] = useState(null);
	const [annualGrowthRate, setAnnualGrowthRate] = useState(null);

	return (
		<CompoundContext.Provider value={sharedData}>
			{props.children}
		</CompoundContext.Provider>
	);
}

export default CompoundContext;
