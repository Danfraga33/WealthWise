import React, { useEffect, useState, Fragment } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TiTickOutline } from 'react-icons/ti';
import SideBar from '@/components/SideBar.jsx';
import { useRouter } from 'next/router';
import Form from '../Form.js';
import Link from 'next/link.js';
import connectDB from '@/components/db.js';
import Stock from '@/models/stockModel';
import Header from '@/components/Header.jsx';
import { Menu, Transition } from '@headlessui/react';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Portfolio = ({ pageProps }) => {
	const portoData = pageProps.portfolioData;
	if (!portoData) {
		return <div>Loading...</div>;
	}
	// console.log(portoData);

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
					<div className="px-4 pt-4">
						<h2 className="text-3xl">Portfolio</h2>
					</div>
					<div className="p-4">
						<div className="w-full border m-auto p-4 rounded-lg bg-white overflow-y-auto">
							<div className="p-2 bg-green-200 inline-block rounded-lg">
								<Form />
							</div>

							<div className="my-3 p-2 grid md:grid-cols-8 items-center justify-between cursor-pointer grid-cols-3">
								<span className="hidden md:flex">Status</span>
								<span className="text-left">Ticker</span>
								{/* <span className="hidden md:grid">Name</span> */}
								<span className="hidden md:grid ">Position Size</span>
								<span className="hidden md:grid">Avg Purchase Price</span>
								<span className="hidden md:grid ">Value @ Purchase</span>
								<span className="grid">Last Price</span>
								<span className="hidden md:grid">Market Value</span>
								<span className="grid text-left">
									Performance Since Inception
								</span>
							</div>
							<ul>
								{portoData.map((stock, id) => (
									<Link href={`/Portfolio/${stock.id}`} key={stock.id}>
										<li
											key={id}
											className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-8 grid-cols-3 items-center justify-between cursor-pointer"
										>
											<div className="md:flex hidden">
												<div className="bg-green-200 p-2 rounded-lg">
													<TiTickOutline />
												</div>
												<div className="pl-4">
													<p className="text-gray-800 font-bold"></p>
												</div>
											</div>
											<div className="flex text-sm md:text-md">
												{stock.ticker} {/* </div> */}
											</div>

											<p className="hidden md:flex text-sm md:text-md">
												{stock.positionSize.toFixed(2)}
											</p>
											<p className="hidden md:flex text-sm md:text-md">
												{stock.avgPurchasePrice.toFixed(2)}
											</p>
											<p className="hidden md:flex text-sm md:text-md">
												{stock.valueAtPurchase.toFixed(2)}
											</p>
											<p className="flex text-sm md:text-md">
												{stock.lastPrice.toFixed(2)}
											</p>
											<p className="hidden md:flex text-sm md:text-md">
												{stock.marketValue.toFixed(2)}
											</p>

											<div className="flex md:justify-between  items-center text-sm md:text-md">
												<p>{stock.performance.toFixed(2) + '%'}</p>
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
				name: stock.name,
				email: stock.email,
				userId: stock.userId,
				ticker: stock.stockData.ticker,
				id: stock._id.toString(),
				positionSize: stock.stockData.positionSize,
				avgPurchasePrice: stock.stockData.avgPurchasePrice,
				valueAtPurchase: stock.stockData.valueAtPurchase,
				lastPrice: stock.stockData.lastPrice,
				marketValue: stock.stockData.marketValue,
				performance: stock.stockData.performance,
				dateOfPurchase: stock.stockData.purchaseDate,
			})),
		},
		revalidate: false,
	};
}
