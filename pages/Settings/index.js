import React, { Fragment, useState, useRef, useContext } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { FaFacebook } from 'react-icons/fa';
import {
	AiFillTwitterCircle,
	AiFillYoutube,
	AiFillGoogleCircle,
} from 'react-icons/ai';
import { GoSignOut } from 'react-icons/go';
import { VscFeedback } from 'react-icons/vsc';
import { data } from '@/data/data';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import { CompoundContext } from '@/contextstore/DataContext';
import { Toaster, toast } from 'sonner';
import Link from 'next/link';

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
	const { user, error, isLoading, signOut } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;
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
					<div className=" grid grid-cols-2 w-full border p-4 rounded-lg bg-white overflow-y-auto">
						<div className="items-center p-5">
							<div className="w-full">
								<div className="pb-2">
									{user && (
										<div className="border border-black/50 rounded-lg p-4 inline-block ">
											<img
												src={user.picture}
												alt={user.name}
												className="pb-2 rounded-lg"
											/>
											<h2>Name: {user.name}</h2>
											<p>Email: {user.email}</p>
										</div>
									)}
								</div>
								<h1 className="text-start underline">Trendline Editor</h1>
								<p className="hidden md:block">
									Update your trendline on your chart here:
								</p>
								<br />
								<div className="w-full">
									<div className="flex items-center w-full mb-2">
										<label htmlFor="initial" className="flex mr-2">
											Initial Amount:
										</label>
										<div className="flex items-center w-full max-w-md">
											<span>$</span>
											<input
												id="initial"
												type="number"
												placeholder="Insert Starting Amount"
												className=" max-w-md border p-1 outline-none rounded-md"
												ref={initialAmountRef}
											/>
										</div>
									</div>
								</div>
								<div className="mb-2">
									<label htmlFor="targetAmount">Target Amount: </label>
									<div className="flex items-center">
										<span>$</span>
										<input
											id="targetAmount"
											type="number"
											placeholder="Insert Target Amount"
											className=" border p-1 outline-none rounded-md"
											ref={targetInputRef}
										/>
									</div>
									<Link href="/questionnaire">
										<button className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white italic font-semibold rounded-md shadow-md text-sm mt-1 ml-4">
											Need Help ?
										</button>
									</Link>
								</div>
								<div className="flex mb-2">
									<label htmlFor="expectedReturn" className="mr-1">
										Age @ Portfolio Start:
									</label>
									<div>
										<input
											id="expectedReturn"
											type="number"
											placeholder="'First Invested!' Age"
											className="text-left md:text-center border p-1 outline-none rounded-md"
											ref={currentAgeRef}
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
											placeholder="Financially Free Age"
											className="text-left md:text-center border p-1 outline-none rounded-md"
											ref={financiallyFreeAgeRef}
										/>
									</div>
								</div>
								<div className="w-full ">
									<button
										className="pt-1 pb-1 pr-3 pl-3 border border-gray-700 rounded-lg hover:bg-white mt-2 "
										onClick={() => {
											updateStates();
											toast.success('Chart has been updated');
										}}
									>
										Update
									</button>
									<Toaster position="bottom-left" />
								</div>
							</div>
							<div className="mt-10 flex gap-2 flex-row ">
								<button className="flex justify-center items-center md:pt-1 md:pb-1 md:pr-2 w-full p-4 pr-6 border border-gray-700 rounded-lg hover:bg-white gap-2">
									<VscFeedback className="ml-1 hidden md:block" />
									<p className="text-sm md:text-md">Give Feedback</p>
								</button>
								<Link
									href="/api/auth/logout"
									className="flex justify-center items-center md:pt-1 md:pb-1 md:pr-2 w-full p-4 pr-6 border border-gray-700 rounded-lg hover:bg-white gap-2 "
								>
									<GoSignOut className="ml-1 hidden md:block" />
									<p className="text-sm md:text-md">Sign Out</p>
								</Link>
							</div>
							<div className="mt-5">
								<ul className="flex gap-2">
									<li>
										<FaFacebook className="text-blue-500 text-2xl" />
									</li>
									<li>
										<AiFillTwitterCircle className="text-blue-300 text-2xl" />
									</li>
									<li>
										<AiFillGoogleCircle className="text-blue-500 text-2xl" />
									</li>
									<li>
										<AiFillYoutube className="text-red-500 text-2xl" />
									</li>
								</ul>
							</div>
						</div>
						<div className="overflow-hidden relative"></div>
					</div>
				</div>
			</div>
		</SideBar>
	);
};

export default settings;
