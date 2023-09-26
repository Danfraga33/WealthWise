import { createContext, useState } from 'react';

const CompoundContext = createContext({});

export function CompoundContextProvider(props) {
	const [initialAmount, setInitialAmount] = useState();
	const [targetAmount, setTargetAmount] = useState();
	const [annualGrowthRate, setAnnualGrowthRate] = useState();

	const context = {
		initialAmount,
		targetAmount,
		annualGrowthRate,
	};

	return <CompoundContext.Provider>{props.children}</CompoundContext.Provider>;
}

export default CompoundContext;
