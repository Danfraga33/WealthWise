import React, { Fragment } from 'react';

const TopCards = ({ portfolioData }) => {
	if (!portfolioData) {
		return <div>Loading...</div>;
	}

	function totalValue() {
		return portfolioData.reduce((sum, stock) => sum + stock.marketValue, 0);
	}

	return (
		<Fragment>
			<div className="grid lg:grid-cols-9 gap-4 p-4">
				<div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-4 rounded-lg shadow-md">
					<div className="flex flex-col w-full pb-4">
						<p className="text-2xl font-bold">Daily</p>
						<p className="text-gray-600">Total Return</p>
					</div>
					<p className="bg-green-200 flex justify-center items-center p-4 rounded-lg ">
						<span className="text-green-700 text-lg">
							{/* {portfolioData.performance} */}
							4%
						</span>
					</p>
				</div>

				<div className="lg:col-span-2 col-span-1 bg-white flex justify-between p-4 w-full rounded-lg shadow-md">
					<div className="flex flex-col w-full pb-4">
						<p className="text-2xl font-bold">5 Years</p>
						<p className="text-gray-600">Annualized Return (CAGR)</p>
					</div>
					<p className="bg-green-200 flex justify-center items-center p-4 rounded-lg ">
						<span className="text-green-700 text-lg">
							{/* {portfolioData.performance} */}
							14%
						</span>
					</p>
				</div>
				<div className=" lg:col-span-2 bg-white flex justify-between w-full p-4 rounded-lg shadow-md">
					<div className="flex flex-col w-full pb-4">
						<p className="text-2xl font-bold">S&P500</p>
						<p className="text-gray-600"> Performance</p>
					</div>
					<p className="bg-green-200 flex justify-center items-center p-4 rounded-lg ">
						<span className="text-green-700 text-lg">
							{/* {polygon.performance} */}
							10%
						</span>
					</p>
				</div>
				<div className="lg:col-span-3 col-span-1 bg-white flex justify-between w-full p-4 rounded-lg shadow-md">
					<div className="flex flex-col w-full pb-4">
						<p className="text-2xl font-bold">Portfolio Value</p>
						<span className="text-green-700 text-2xl">
							$ {totalValue().toFixed(2)}
						</span>
					</div>
					{/* <p className="bg-green-200 flex justify-center items-center p-4 rounded-lg ">
						<span className="text-green-700 text-lg">10%</span>
					</p> */}
				</div>
			</div>
		</Fragment>
	);
};

export default TopCards;
