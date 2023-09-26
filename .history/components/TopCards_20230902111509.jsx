import React, { Fragment } from 'react';

const TopCards = () => {
	return (
		<Fragment>
			<div className="grid lg:grid-cols-5 gap-4 p-4">
				<div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-4 rounded-lg">
					<div className="flex flex-col w-full pb-4">
						<p className="text-2xl font-bold">1 Year</p>
						<p className="text-gray-600">Total Return</p>
					</div>
					<p className="bg-green-200 flex justify-center items-center p-4 rounded-lg ">
						<span className="text-green-700 text-lg">+8%</span>
					</p>
				</div>
				<div className="lg:col-span-2 col-span-1 bg-white flex justify-between p-4 w-full rounded-lg">
					<div className="flex flex-col w-full pb-4">
						<p className="text-2xl font-bold">$127,846</p>
						<p className="text-gray-600">Annualized Return (CAGR)</p>
					</div>
					<p className="bg-green-200 flex justify-center items-center p-4 rounded-lg ">
						<span className="text-green-700 text-lg">+11%</span>
					</p>
				</div>
				<div className=" bg-white flex justify-between w-full p-4 rounded-lg">
					<div className="flex flex-col w-full pb-4">
						<p className="text-2xl font-bold">11,233</p>
						<p className="text-gray-600">Customers</p>
					</div>
					<p className="bg-green-200 flex justify-center items-center p-4 rounded-lg ">
						<span className="text-green-700 text-lg">+9%</span>
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default TopCards;
