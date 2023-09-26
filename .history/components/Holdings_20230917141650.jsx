import React from 'react';
import { data } from '/data/data';
import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineStock } from 'react-icons/ai';

const Holdings = ({ portfolioData }) => {
	return (
		<div className="w-full col-span-1 relative p-4 border rounded-lg  bg-white overflow-scroll ">
			<h1>Current Holdings</h1>
			{portfolioData.map((stock, id) => (
				<li
					key={id}
					className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex
            items-center cursor-pointer shadow"
				>
					<div className="bg-blue-100 rounded-lg p-3">
						<AiOutlineStock className="text-green-700" />
					</div>
					<div className="pl-4">
						<p className="text-gray-800 font-bold">{stock.ticker}</p>
						<p className="text-gray-400 text-sm">
							${stock.marketValue.toFixed(2)}
						</p>
					</div>

					<p className="lg:flex md:hidden absolute right-6 text-sm bg-green-200 p-3 rounded-lg font-bold">
						{stock.performance.toFixed(2)}%
					</p>
				</li>
			))}
		</div>
	);
};

export default Holdings;
