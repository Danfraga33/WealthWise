import { createContext, useState } from 'react';

export const CompoundContext = createContext({});

function CompoundContextProvider(props) {
	const [initialAmount, setInitialAmount] = useState(null);
	const [targetAmount, setTargetAmount] = useState(null);
	const [annualGrowthRate, setAnnualGrowthRate] = useState(null);

	console.log({
		initialAmount,
		targetAmount,
		annualGrowthRate,
	});

	const context = {
		initialAmount,
		targetAmount,
		annualGrowthRate,
		setInitialAmount,
		setTargetAmount,
		setAnnualGrowthRate,
	};

	return (
		<CompoundContext.Provider value={context}>
			{props.children}
		</CompoundContext.Provider>
	);
}

export default CompoundContextProvider;
