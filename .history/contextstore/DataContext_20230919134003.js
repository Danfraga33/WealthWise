import { createContext, useState } from 'react';

export const CompoundContext = createContext({
	initialAmount: null,
	targetAmount: null,
	annualGrowthRate: null,
});

function CompoundContextProvider(props) {
	const [initialAmount, setInitialAmount] = useState(null);
	const [targetAmount, setTargetAmount] = useState(null);
	const [ageDifference, setageDifference] = useState(null);

	// console.log({
	// 	initialAmount,
	// 	targetAmount,
	// 	annualGrowthRate,
	// });

	const context = {
		initialAmount,
		targetAmount,
		ageDifference,
		setInitialAmount,
		setTargetAmount,
		setageDifference,
	};

	return (
		<CompoundContext.Provider value={context}>
			{props.children}
		</CompoundContext.Provider>
	);
}

export default CompoundContextProvider;
