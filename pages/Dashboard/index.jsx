import React, { Fragment, useState, useContext } from 'react';
import Head from 'next/head';
import Header from '@/components/Header.jsx';
import TopCards from '@/components/TopCards.jsx';
import LineChart from '@/components/LineChart.jsx';
import Holdings from '@/components/Holdings.jsx';
import { useSession } from 'next-auth/react';
import SideBar from '@/components/SideBar';
import Login from '@/components/Login/Login';
import { CompoundContext } from '@/contextstore/DataContext';
import Stock from '@/models/stockModel';
import connectDB from '@/components/db';

const Dashboard = ({ pageProps }) => {
	const { portfolioData } = pageProps;
	// console.log(pageProps);
	const sessionData = useSession();
	const session = sessionData.data;

	const contextCtx = useContext(CompoundContext);

	return (
		<Fragment>
			{/* Head */}

			<Head>
				<title>Investor Centre</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{session ? (
				<SideBar portfolioData={portfolioData}>
					<Header />
					<div className="px-4 pt-4">
						<h2 className="text-3xl">Performance</h2>
					</div>
					<TopCards portfolioData={portfolioData} />
					<div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
						<LineChart portfolioData={portfolioData} contextCtx={contextCtx} />
						<Holdings portfolioData={portfolioData} />
					</div>
				</SideBar>
			) : (
				<Login />
			)}
		</Fragment>
	);
};

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
				performance: stock.performance,
				dateOfPurchase: stock.purchaseDate,
			})),
		},
		revalidate: 60,
	};
}

export default Dashboard;
