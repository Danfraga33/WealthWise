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
							<div>
								<ul>
									<li>Facebook</li>
									<li>Twitter</li>
									<li></li>
									<li></li>
									<button class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											class="w-5"
											preserveAspectRatio="xMidYMid meet"
											viewBox="0 0 24 24"
										>
											<g fill="none">
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
													fill="currentColor"
												/>
											</g>
										</svg>
									</button>
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
