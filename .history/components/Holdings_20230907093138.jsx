import React from 'react';
import { data } from '/data/data';
import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineStock } from 'react-icons/ai';

const Holdings = () => {
	return (
		<div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] p-4 border rounded-lg m-auto bg-white overflow-scroll ">
			<h1>Currenr Holdings</h1>
			{data.map((stock, id) => (
				<li
					key={id}
					className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex
            items-center cursor-pointer"
				>
					<div className="bg-purple-100 rounded-lg p-3">
						<AiOutlineStock className="text-purple-800" />
					</div>
					<div className="pl-4">
						<p className="text-gray-800 font-bold">${stock.summary.ticker}</p>
						<p className="text-gray-400 text-sm">{stock.summary.name}</p>
					</div>

					<p className="lg:flex md:hidden absolute right-6 text-sm bg-green-200 p-3 rounded-lg font-bold">
						{stock.performance}
					</p>
				</li>
			))}
		</div>
	);
};

export default Holdings;
