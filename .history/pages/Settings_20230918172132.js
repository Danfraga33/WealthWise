import React, { Fragment, useState, useRef } from 'react';
import Link from 'next/link';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '@/data/data';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import Head from 'next/head';

const customers = () => {
	const [periodsToReachTarget, setPeriodsToReachTarget] = useState(0);

	// function convertDate(inputDate) {
	// 	const date = new Date(inputDate);
	// 	const monthNames = [
	// 		'January',
	// 		'February',
	// 		'March',
	// 		'April',
	// 		'May',
	// 		'June',
	// 		'July',
	// 		'August',
	// 		'September',
	// 		'October',
	// 		'November',
	// 		'December',
	// 	];

	// 	const month = monthNames[date.getMonth()];
	// 	const year = date.getFullYear();

	// 	return `${month} ${year}`;
	// }

	// const earliestDateConverted = convertDate(earliestDate);

	// const periodsToReachTarget =
	// 	calculatePeriodsToReachTarget(
	// 		initialAmount,
	// 		targetAmount,
	// 		annualGrowthRate
	// 	) * 2;

	// console.log(
	// 	`It will take ${periodsToReachTarget} years to reach ${targetAmount} from ${initialAmount} with an annual growth rate of ${
	// 		annualGrowthRate * 100
	// 	}%.`
	// );

	function calculatePeriodsToReachTarget(
		initialAmount,
		targetAmount,
		annualGrowthRate
	) {
		let periods = 0;
		let currentAmount = initialAmount;

		while (currentAmount < targetAmount) {
			currentAmount += currentAmount * annualGrowthRate;
			periods++;
		}

		return periods;
	}
	const initialAmountRef = useRef();
	const targetInputRef = useRef();
	const annualGrowthRateRef = useRef();
	const [initialAmount, setInitialAmount] = useState(1000000);
	const [targetAmount, setTargetAmount] = useState(5000000);
	const [annualGrowthRate, setAnnualGrowthRate] = useState(0.1);
	function handleTargetChange() {
		const newInitialAmount = parseFloat(initialAmountRef.current.value);
		const newTargetAmount = parseFloat(targetInputRef.current.value);
		const newGrowthRate = parseFloat(annualGrowthRateRef.current.value);
		setInitialAmount(newInitialAmount);
		setTargetAmount(newTargetAmount);
		setAnnualGrowthRate(newGrowthRate);

		setPeriodsToReachTarget(
			calculatePeriodsToReachTarget(
				newInitialAmount,
				newTargetAmount,
				newGrowthRate
			) * 2
		);
		console.log(periodsToReachTarget);
	}
	return (
		<SideBar>
			<Head></Head>
			<Header />
			<div className="bg-gray-100 min-h-screen">
				<div className="bg-white rounded-lg p-3 flex flex-col justify-center md:w-full md:h-full md:text-center">
					<label htmlFor="initial">Initial Amount: </label>
					<div>
						<span>$</span>
						<input
							id="initial"
							type="number"
							placeholder="Starting Amount"
							className="text-center border p-1 outline-none rounded-md"
							ref={initialAmountRef}
						/>
					</div>

					<p>PUT ALL 3 INPUTS IN SETTINGS</p>
					<label htmlFor="targetAmount">Target Amount: </label>
					<div>
						<span>$</span>
						<input
							id="targetAmount"
							type="number"
							placeholder="$2000000"
							className="text-center border p-1 outline-none rounded-md"
							ref={targetInputRef}
						/>{' '}
						<Link href="/questionnaire">
							<button className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white italic font-semibold rounded-md shadow-md text-sm mt-1">
								Need Help ?
							</button>
						</Link>
					</div>

					<label htmlFor="expectedReturn">Expected Return: </label>
					<div>
						<input
							id="expectedReturn"
							type="number"
							placeholder="10%"
							className="text-center border p-1 outline-none rounded-md"
							ref={annualGrowthRateRef}
						/>
						<span>%</span>
					</div>
					<button onClick={handleTargetChange}> Update</button>
				</div>
			</div>
		</SideBar>
	);
};

export default customers;
