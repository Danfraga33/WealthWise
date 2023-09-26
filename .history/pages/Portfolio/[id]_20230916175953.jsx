import React from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import connectDB from '../../components/db';
import detailPage from '@/components/detailPage';

///////////// Tells which stock should be rendered
// 1. Create a Link in the Parent Page
// 2. Define Dynamic Route in Next.js
// 3. Fetch and Display Dynamic Content

//  Telling Next.js which specific paths, or routes, should be pre-rendered as static HTML pages during the build process.
export async function getStaticPaths() {
	connectDB();

	const stockIds = await Stock.find({}, { _id: 1 }).lean();

	const paths = stockIds.map((stock) => ({
		params: {
			id: stock._id.toString(),
		},
	}));

	return {
		fallback: false,
		paths,
	};
}

//CONNECT PROPS TO SELECTED ID
export async function getStaticProps(context) {
	//ID is generated from getStaticPaths
	const id = context.params.id;
	connectDB();
	const stock = await Stock.findById(id).lean();
	console.log(stock);
	// console.log('NEW ID', id);

	const props = {
		stockName: stock.summary.name,
		ticker: stock.summary.ticker,
		lastPrice: stock.lastPrice,
		performance: stock.performance,
		avgPurchasePrice: stock.avgPurchasePrice,
		valueAtPurchase: stock.valueAtPurchase,
		positionSize: stock.positionSize,
	};

	return {
		props,
	};
}

const StockDetails = ({ pageProps }) => {
	// console.log(pageProps);
	return (
		<SideBar>
			<Header />
			<div>
				<h1>Detail Page</h1>
				<p>{pageProps.stockName}</p>
				<p>{pageProps.lastPrice}</p>
				<h1>HELLo</h1>
				<detailPage />
			</div>
		</SideBar>
	);
};

export default StockDetails;
