import React, { Fragment, useState, useRef, useContext } from 'react';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { useSession, signIn, signOut } from 'next-auth/react';
import { GoSignOut } from 'react-icons/go';
import { VscFeedback } from 'react-icons/vsc';
import { data } from '@/data/data';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import { CompoundContext } from '@/contextstore/DataContext';

const settings = () => {
	const context = useContext(CompoundContext);
	const {
		initialAmount,
		targetAmount,
		ageDifference,
		setInitialAmount,
		setTargetAmount,
		setAgeDifference,
	} = context;

	const initialAmountRef = useRef();
	const targetInputRef = useRef();
	const currentAgeRef = useRef();
	const financiallyFreeAgeRef = useRef();

	function updateStates() {
		const newInitialAmount = parseFloat(initialAmountRef.current.value);
		const newTargetAmount = parseFloat(targetInputRef.current.value);
		const expectedTimeFrame = parseFloat(
			financiallyFreeAgeRef.current.value - currentAgeRef.current.value
		);

		setInitialAmount(newInitialAmount);
		setTargetAmount(newTargetAmount);
		setAgeDifference(expectedTimeFrame);
	}

	//
	//////////////////////////////////////////////////////////////////

	return (
		<SideBar>
			<Head></Head>
			{/* <Header /> */}
			<Header />

			<div className="bg-gray-100 min-h-screen">
				<div className="px-4 pt-4">
					<h2 className="text-3xl">Settings</h2>
				</div>
				<div className="p-4">
					<div className=" grid grid-cols-2 w-full border p-4 rounded-lg bg-white overflow-y-auto ">
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
										placeholder="Target Amount"
										className=" border p-1 outline-none rounded-md"
										ref={targetInputRef}
										defaultValue="10000"
									/>
									<Link href="/questionnaire">
										<button className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white italic font-semibold rounded-md shadow-md text-sm mt-1 ml-4">
											Need Help ?
										</button>
									</Link>
								</div>

								<div className="flex mb-2">
									<label htmlFor="expectedReturn" className="mr-1">
										Current Age:
									</label>
									<div>
										<input
											id="expectedReturn"
											type="number"
											placeholder="10%"
											className="text-center border p-1 outline-none rounded-md"
											ref={currentAgeRef}
											defaultValue="35"
										/>
									</div>
								</div>
								<div className="flex mb-2">
									<label htmlFor="expectedReturn" className="mr-1">
										Financially Free Age:
									</label>
									<div>
										<input
											id="expectedReturn"
											type="number"
											placeholder="10%"
											className="text-center border p-1 outline-none rounded-md"
											ref={financiallyFreeAgeRef}
											defaultValue="65"
										/>
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
							<div className="mt-5">
								<ul>
									<li>
										<FaFacebook className="text-blue-500 text-2xl" />
									</li>
									<li>
										<RiTwitterXFill className="text-light-blue-500 text-2xl" />
									</li>
									<li>Google</li>
									<li>Youtube</li>
								</ul>
							</div>
						</div>
						<div className="overflow-hidden relative">
							<img
								src="/climbingMountain.jpg"
								className="object-cover opacity-50 absolute inset-0 bg-white shadow-inner"
							/>
						</div>
					</div>
				</div>
			</div>
		</SideBar>
	);
};

export default settings;
