import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TiTickOutline } from 'react-icons/ti';
import SideBar from '@/components/SideBar.jsx';
import Form from '../Form.js';
import Link from 'next/link.js';
import connectDB from '@/components/db.js';
import Stock from '@/models/stockModel';
import Header from '@/components/Header.jsx';

const Portfolio = ({ pageProps }) => {
	const portoData = pageProps.portfolioData;
	console.log(portoData);
	if (!portoData) {
		return <div>Loading...</div>;
	}
	console.log(portoData);
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

												<div class="relative inline-block text-left">
													<div>
														{/* <button
															type="button"
															class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
															id="menu-button"
															aria-expanded="true"
															aria-haspopup="true"
														> */}
														<BsThreeDotsVertical />
														<svg
															class="-mr-1 h-5 w-5 text-gray-400"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
																clip-rule="evenodd"
															/>
														</svg>
														{/* </button> */}
													</div>
													{/* <div
														class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
														role="menu"
														aria-orientation="vertical"
														aria-labelledby="menu-button"
														tabindex="-1"
													>
														<div class="py-1" role="none">
															<a
																href="#"
																class="text-gray-700 block px-4 py-2 text-sm"
																role="menuitem"
																tabindex="-1"
																id="menu-item-0"
															>
																Account settings
															</a>
															<a
																href="#"
																class="text-gray-700 block px-4 py-2 text-sm"
																role="menuitem"
																tabindex="-1"
																id="menu-item-1"
															>
																Support
															</a>
															<a
																href="#"
																class="text-gray-700 block px-4 py-2 text-sm"
																role="menuitem"
																tabindex="-1"
																id="menu-item-2"
															>
																License
															</a>
															<form method="POST" action="#" role="none">
																<button
																	type="submit"
																	class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
																	role="menuitem"
																	tabindex="-1"
																	id="menu-item-3"
																>
																	Sign out
																</button>
															</form>
														</div>
													</div> */}
												</div>
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
