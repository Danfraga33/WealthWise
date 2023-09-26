import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TiTickOutline } from 'react-icons/ti';
import SideBar from '@/components/SideBar.jsx';
import { useRouter } from 'next/router';
import Form from '../Form.js';
import Link from 'next/link.js';
import connectDB from '@/components/db.js';
import Stock from '@/models/stockModel';
import Header from '@/components/Header.jsx';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Portfolio = ({ pageProps }) => {
	const portoData = pageProps.portfolioData;
	if (!portoData) {
		return <div>Loading...</div>;
	}
	console.log(portoData);

	// DELETE
	async function deleteStock(id) {
		try {
			const response = await fetch(`/api/deleteStock?id=${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				const router = useRouter();
				router.push('/Dashbaord');
			} else {
				console.log('Failure to delete');
			}
			// Item deleted successfully, you can handle any UI updates here
			// For example, you can remove the item from the UI state or trigger a re-fetch of data.
		} catch (error) {
			console.error('Error deleting stock:', error);
			// Handle any network or other errors.
		}
	}
	return (
		<>
			<SideBar>
				<Header />
				<div className="bg-gray-100 min-h-screen">
					<div className="flex justify-between px-4 pt-4">
						<h2>Portfolio</h2>
					</div>
					<div className="p-4">
						<div className="w-full border m-auto p-4 rounded-lg bg-white overflow-y-auto">
							<div className="p-2 bg-green-200 inline-block rounded-lg">
								<Form />
							</div>

							<div className="my-3 p-2 grid md:grid-cols-8 grid-cols-3 items-center justify-between cursor-pointer">
								<span>Status</span>
								<span className="sm:text-left text-right">Ticker</span>
								{/* <span className="hidden md:grid">Name</span> */}
								<span className="hidden md:grid ">Position Size</span>
								<span className="hidden md:grid">Avg Purchase Price</span>
								<span className="hidden md:grid">Value @ Purchase</span>
								<span className="hidden md:grid">Last Price</span>
								<span className="hidden md:grid">Market Value</span>
								<span className=" md:grid">Performance Since Inception</span>
							</div>
							<ul>
								{portoData.map((stock, id) => (
									<Link href={`/Portfolio/${stock.id}`} key={stock.id}>
										<li
											key={id}
											className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-8 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
										>
											<div className="flex">
												<div className="bg-green-200 p-2 rounded-lg">
													<TiTickOutline />
												</div>
												<div className="pl-4">
													<p className="text-gray-800 font-bold"></p>
												</div>
											</div>
											<div className="flex">
												{stock.ticker} {/* </div> */}
											</div>

											<p className="hidden md:flex">
												{stock.positionSize.toFixed(2)}
											</p>
											<p className="hidden md:flex">
												{stock.avgPurchasePrice.toFixed(2)}
											</p>
											<p className="hidden md:flex">
												{stock.valueAtPurchase.toFixed(2)}
											</p>
											<p className="hidden md:flex">
												{stock.lastPrice.toFixed(2)}
											</p>
											<p className="hidden md:flex">
												{stock.marketValue.toFixed(2)}
											</p>

											<div className="sm:flex hidden justify-between items-center">
												<p>{stock.performance.toFixed(2) + '%'}</p>

												<Menu
													as="div"
													className="relative inline-block text-left"
												>
													<div>
														<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 relative z-10">
															<BsThreeDotsVertical
																onClick={(e) => e.stopPropagation}
															/>
														</Menu.Button>
													</div>

													<Transition
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
															<div className="py-1">
																<Menu.Item>
																	{({ active }) => (
																		<a
																			href="#"
																			className={classNames(
																				active
																					? 'bg-gray-100 text-gray-900'
																					: 'text-gray-700',
																				'block px-4 py-2 text-sm'
																			)}
																			onClick={() => deleteStock(stock.id)}
																		>
																			Delete
																		</a>
																	)}
																</Menu.Item>
															</div>
														</Menu.Items>
													</Transition>
												</Menu>
											</div>
										</li>
									</Link>
								))}
							</ul>
						</div>
					</div>
				</div>
			</SideBar>
		</>
	);
};

export default Portfolio;

//Get PortfolioData
export async function getStaticProps() {
	connectDB();

	const portfolioData = await Stock.find().lean();

	return {
		props: {
			portfolioData: portfolioData.map((stock) => ({
				ticker: stock.summary.ticker,
				id: stock._id.toString(),
				positionSize: stock.positionSize,
				avgPurchasePrice: stock.avgPurchasePrice,
				valueAtPurchase: stock.valueAtPurchase,
				lastPrice: stock.lastPrice,
				marketValue: stock.marketValue,
				performance: stock.performance,
			})),
		},
		revalidate: 60,
	};
}
