import Dashboard from './Dashboard/index.jsx';
import connectDB from '@/components/db.js';
import React from 'react';
import Stock from '../models/stockModel.js';
import { useContext } from 'react';

export default function Home({ pageProps }) {
	const portoData = pageProps.portfolioData;
	const contextCtx = useContext(CompoundContext);
	const {
		initialAmount,
		targetAmount,
		annualGrowthRate,
		setInitialAmount,
		setTargetAmount,
		setAnnualGrowthRate,
	} = contextCtx;

	console.log(initialAmount);

	return <Dashboard portfolioData={portoData} />;
}

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
