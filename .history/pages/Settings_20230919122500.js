import React, { Fragment, useState, useRef, useContext } from 'react';
import Link from 'next/link';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { useSession, signIn, signOut } from 'next-auth/react';
import { GoSignOut } from 'react-icons/go';
import { VscFeedback } from 'react-icons/vsc';
import { data } from '@/data/data';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import Head from 'next/head';
import { CompoundContext } from '@/contextstore/DataContext';

const settings = () => {
	const context = useContext(CompoundContext);
	const {
		initialAmount,
		targetAmount,
		annualGrowthRate,
		setInitialAmount,
		setTargetAmount,
		setAnnualGrowthRate,
	} = context;

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
	cosnt init = Number(initalAmount)

	console.log(+initialAmount);
	console.log(+targetAmount);
	console.log(+annualGrowthRate);
	console.log(
		calculatePeriodsToReachTarget(
			+initialAmount,
			+targetAmount,
			+annualGrowthRate
		)
	);

	const initialAmountRef = useRef();
	const targetInputRef = useRef();
	const annualGrowthRateRef = useRef();

	function updateStates() {
		const newInitialAmount = parseFloat(targetInputRef.current.value);
		const newTargetAmount = parseFloat(annualGrowthRateRef.current.value);
		const newGrowthRate = parseFloat(initialAmountRef.current.value);

		setInitialAmount(newInitialAmount);
		setTargetAmount(newTargetAmount);
		setAnnualGrowthRate(newGrowthRate);
	}

	// console.log(newGrowthRate, newInitialAmount, newTargetAmount);
	//////////////////////////////////////////////////////////////////

	// const newData = {
	// 	inputAmount: initialAmount,
	// 	annualGrowthRate: annualGrowthRate,
	// 	periodsToReachTarget: periodsToReachTarget,
	// };

	// console.log(newData);

	return (
		<SideBar>
			<Head></Head>
			{/* <Header /> */}
			<div className="bg-gray-100 min-h-screen">
				<div className="items-center p-5">
					<div>
						<h1 className="text-start">Trendline Editor</h1>
						<p>Update your trendline on your chart here:</p>
						<br />
						<div className="w-full">
							<div className="flex items-center w-full mb-2">
								<label htmlFor="initial" className="flex mr-2">
									Initial Amount:
								</label>

								<span>$</span>
								<input
									id="initial"
									type="number"
									placeholder="Starting Amount"
									className=" border p-1 outline-none rounded-md className=w-full"
									ref={initialAmountRef}
									defaultValue="1000"
								/>
							</div>
						</div>

						<div className="mb-2">
							<label htmlFor="targetAmount">Target Amount: </label>
							<span>$</span>
							<input
								id="targetAmount"
								type="number"
								placeholder="$2000000"
								className=" border p-1 outline-none rounded-md"
								ref={targetInputRef}
								defaultValue="2000000"
							/>
							<Link href="/questionnaire">
								<button className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white italic font-semibold rounded-md shadow-md text-sm mt-1 ml-4">
									Need Help ?
								</button>
							</Link>
						</div>

						<div className="flex mb-2">
							<label htmlFor="expectedReturn" className="mr-1">
								Expected Return:
							</label>
							<div>
								<input
									id="expectedReturn"
									type="number"
									placeholder="10%"
									className="text-center border p-1 outline-none rounded-md"
									ref={annualGrowthRateRef}
									defaultValue="5"
								/>
								<span>%</span>
							</div>
						</div>
						<div className="w-full ">
							<button
								className="pt-1 pb-1 pr-3 pl-3 border border-gray-700 rounded-lg hover:bg-white mt-2 "
								onClick={updateStates}
							>
								Update
							</button>
						</div>
					</div>
					<div className="mt-10 flex gap-2">
						<button className="flex justify-center items-center pt-1 pb-1 pr-2 border border-gray-700 rounded-lg hover:bg-white gap-2">
							<VscFeedback />
							Give Feedback
						</button>
						<button
							className="flex justify-center items-center pt-1 pb-1 pr-2 border border-gray-700 rounded-lg hover:bg-white gap-2 "
							onClick={() => signOut()}
						>
							<GoSignOut />
							Sign Out
						</button>
					</div>
				</div>
			</div>
		</SideBar>
	);
};

export default settings;
