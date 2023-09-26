import { createContext, useState } from 'react';

const CompoundContext = createContext({
	initialAmount: initialAmount,
	targetAmount,
	annualGrowthRate,
});

export function CompoundContextProvider(props) {
	const [initialAmount, setInitialAmount] = useState(0);
	const [targetAmount, setTargetAmount] = useState(0);
	const [annualGrowthRate, setAnnualGrowthRate] = useState(0);

	const context = {
		initialAmount: initialAmount,
		targetAmount: targetAmount,
		annualGrowthRate,
	};

	return (
		<CompoundContext.Provider value={context}>
			{props.children}
		</CompoundContext.Provider>
	);
}

export default CompoundContext;
