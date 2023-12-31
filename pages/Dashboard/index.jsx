import React, { Fragment, useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header.jsx';
import TopCards from '@/components/TopCards.jsx';
import LineChart from '@/components/LineChart.jsx';
import Holdings from '@/components/Holdings.jsx';
import SideBar from '@/components/SideBar';
import { CompoundContext } from '@/contextstore/DataContext';
import Stock from '@/models/stockModel';
import connectDB from '@/components/db';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useUser } from '@auth0/nextjs-auth0/client';

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
				positionSize: stock.stockData.positionSize,
				avgPurchasePrice: stock.stockData.avgPurchasePrice,
				valueAtPurchase: stock.stockData.valueAtPurchase,
				lastPrice: stock.stockData.lastPrice,
				marketValue: stock.stockData.marketValue,
				performance: stock.stockData.performance,
				dateOfPurchase: stock.stockData.purchaseDate,
			})),
		},
		revalidate: 259200,
	};
}

const Dashboard = withPageAuthRequired(({ pageProps }) => {
	const [updatedPortfolioData, setUpdatedPortfolioData] = useState();
	const { portfolioData } = pageProps;
	const contextCtx = useContext(CompoundContext);
	const { user } = useUser();

	useEffect(() => {
		(async () => {
			const response = await fetch('/api/getStocks');
			const json = await response.json();

			// console.log(json);
			setUpdatedPortfolioData(
				json.map((stock) => ({
					name: stock.name,
					email: stock.email,
					userId: stock.userId,
					ticker: stock.stockData.ticker,
					positionSize: stock.stockData.positionSize,
					avgPurchasePrice: stock.stockData.avgPurchasePrice,
					valueAtPurchase: stock.stockData.valueAtPurchase,
					lastPrice: stock.stockData.lastPrice,
					marketValue: stock.stockData.marketValue,
					performance: stock.stockData.performance,
					dateOfPurchase: stock.stockData.purchaseDate,
				}))
			);
		})();
	}, []);

	// useEffect(() => {
	// 	const filteredData = portfolioData.filter((stockDoc) => {
	// 		return stockDoc.userId === user.sub;
	// 	});
	// 	setUpdatedPortfolioData(filteredData);
	// }, [portfolioData, user]);

	return (
		<Fragment>
			<Head>
				<title>Investor Centre</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<SideBar portfolioData={portfolioData}>
				<Header />
				<div className="px-4 pt-4">
					<h2 className="text-3xl">Performance</h2>
				</div>
				<TopCards portfolioData={updatedPortfolioData} />
				<div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
					<LineChart
						portfolioData={updatedPortfolioData}
						contextCtx={contextCtx}
					/>
					<Holdings portfolioData={updatedPortfolioData} />
				</div>
			</SideBar>
		</Fragment>
	);
});

////////// ENTRY POINT

export default Dashboard;
