import React from 'react';
import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TiTickOutline } from 'react-icons/ti';
import { BsEye } from 'react-icons/bs';

const Portfolio = () => {
	return (
		<div className="bg-gray-100 min-h-screen">
			<div className="flex justify-between px-4 pt-4">
				<h2>Orders</h2>
			</div>
			{/* Headings */}
			<div className="p-4">
				<div className="w-full border m-auto p-4 rounded-lg bg-white overflow-y-auto">
					<div className="my-3 p-2 grid md:grid-cols-8 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
						<span>Status</span>
						<span className="sm:text-left text-right">Status</span>
						<span className="hidden md:grid">Last Order</span>
						<span className="hidden sm:grid">Method</span>
						<span className="hidden sm:grid">Method</span>
						<span className="hidden sm:grid">Method</span>
						<span className="hidden sm:grid">Method</span>
						<span className="hidden sm:grid">Method</span>
					</div>
					<ul>
						{data.map((stock, id) => (
							<li
								key={id}
								className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-8 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
							>
								<div className="flex">
									<div
										className={
											stock.status === 'purchased'
												? 'bg-green-200 p-2 rounded-lg'
												: stock.status === 'watchlist'
												? 'bg-indigo-100 p-2 rounded-lg'
												: 'bg-white p-2 rounded-lg'
										}
									>
										{stock.status === 'purchased' ? (
											<TiTickOutline />
										) : stock.status === 'watchlist' ? (
											<BsEye />
										) : (
											console.log('error')
										)}
									</div>
									<div className="pl-4">
										<p className="text-gray-800 font-bold"></p>
										<p className="text-gray-800 text-sm">
											{stock.summary.ticker}
										</p>
									</div>
								</div>
								<p className="text-gray-600 sm:text-left text-right">
									<span
										className={
											stock.summary.name === 'Processing'
												? 'bg-green-200 p-2 rounded-lg'
												: stock.summary.ticker === 'Completed'
												? 'bg-blue-200 p-2 rounded-lg'
												: 'bg-yellow-200 p-2 rounded-lg'
										}
									>
										{stock.summary.ticker}
									</span>
								</p>
								<p className="hidden md:flex">{stock.summary.ticker}</p>
								<div className="sm:flex hidden justify-between items-center">
									<p>{stock.summary.ticker}</p>
									<BsThreeDotsVertical />
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
