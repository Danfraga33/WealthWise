import React, { Fragment } from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '@/data/data';
import SideBar from '@/components/SideBar';

const customers = () => {
	return (
		<SideBar>
			<h1>Settings</h1>
			<div className="grid grid-cols-3 gap-">
				<div className="md:flex md:flex-col text-center">
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
				</div>
				<div className="md:flex md:flex-col text-center">
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
						/>
					</div>
					<button onClick={handleTargetChange}> Update</button>
					<Link href="/questionnaire">
						<button className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white italic font-semibold rounded-md shadow-md text-sm mt-1">
							Need Help ?
						</button>
					</Link>
				</div>
				<div className="md:flex md:flex-col text-center">
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
				</div>
			</div>
		</SideBar>
	);
};

export default customers;
