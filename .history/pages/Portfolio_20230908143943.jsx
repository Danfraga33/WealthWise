// import { data } from '../data/data.js';
// import GetData from './GetData.js';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TiTickOutline } from 'react-icons/ti';
import SideBar from '@/components/SideBar.jsx';
import Form from './Form.js';
import { useToast } from '@/components/ToastContext.js';
import { useState } from 'react';
import connectDB from '@/components/db.js';
import Stock from '@/models/stockModel';

const Portfolio = ({ pageProps }) => {
	const { showToast, toastMessage } = useToast;
	// const handleDataFetched = (fetchedData) => {
	// 	setPortfolioData(fetchedData);
	// 	console.log(GetData);
	// };
	// console.log(props.pageProps); //UNDEFINED
	const portoData = pageProps.portfolioData;
	console.log(portoData);
	if (!portoData) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<SideBar>
				<div className="bg-gray-100 min-h-screen">
					<div className="flex justify-between px-4 pt-4">
						<h2>Portfolio</h2>
					</div>
					<div className="p-4">
						<div className="w-full border m-auto p-4 rounded-lg bg-white overflow-y-auto">
							<div className="p-2 bg-green-200 inline-block rounded-lg">
								<Form />
							</div>

							<div className="my-3 p-2 grid md:grid-cols-8 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
								<span>Status</span>
								<span className="sm:text-left text-right">Ticker</span>
								{/* <span className="hidden md:grid">Name</span> */}
								<span className="hidden sm:grid">Position Size</span>
								<span className="hidden sm:grid">Avg Purchase Price</span>
								<span className="hidden sm:grid">Value @ Purchase</span>
								<span className="hidden sm:grid">Last Price</span>
								<span className="hidden sm:grid">Market Value</span>
								<span className="hidden sm:grid">
									Performance Since Inception
								</span>
							</div>
							<ul>
								{portoData.map((stock, id) => (
									<li
										key={id}
										className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-8 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
									>
										{' '}
										<div className="flex">
											{' '}
											<div className="bg-green-200 p-2 rounded-lg">
												{' '}
												<TiTickOutline />{' '}
											</div>{' '}
											<div className="pl-4">
												{' '}
												<p className="text-gray-800 font-bold"></p>{' '}
											</div>{' '}
										</div>{' '}
										<div className="flex">
											{' '}
											{/* <div className={ stock.status === 'purchased' ? 'bg-green-200 p-2 rounded-lg' : stock.status === 'watchlist' ? 'bg-indigo-100 p-2 rounded-lg' : 'bg-white p-2 rounded-lg' } > */}{' '}
											{stock.ticker} {/* </div> */}{' '}
										</div>{' '}
										{/* <p className="text-gray-600 sm:text-left text-right"> <span>{stock.summary.name}</span> </p> */}{' '}
										<p className="hidden md:flex">{stock.positionSize}</p>{' '}
										<p className="hidden md:flex">{stock.avgPurchasePrice}</p>{' '}
										<p className="hidden md:flex">{stock.valueAtPurchase}</p>{' '}
										<p className="hidden md:flex">{stock.lastPrice}</p>{' '}
										<p className="hidden md:flex">{stock.marketValue}</p>{' '}
										{/* <div className="sm:flex hidden justify-between items-center"> <p>{stock.performance}</p> <BsThreeDotsVertical /> </div> */}{' '}
									</li>
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
	//GETS DATA
	// console.log(portfolioData);
	//CORRECT DATA!
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
			})),
		},
		revalidate: 60,
	};
}
