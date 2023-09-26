import React from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import connectDB from '../../components/db';
import DetailPage from '@/components/DetailPage';
import { Grid, Paper } from '@mui/material';

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

export async function getStaticProps(context) {
	const id = context.params.id;
	connectDB();
	const stock = await Stock.findById(id).lean();
	console.log(stock);

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
	return (
		<SideBar>
			<Header />
			<div className="p-2">
				<h1 className="flex justify-center items-center h-20 mr">
					{pageProps.stockName}
					<span className="text-[10px]">{pageProps.ticker}</span>
				</h1>
				<Grid container spacing={1} className="pb-2">
					<Grid item md>
						<Paper className="p-4">${pageProps.lastPrice}</Paper>
					</Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item md>
						<Paper className="p-4">${pageProps.lastPrice}</Paper>
					</Grid>
					<Grid item md>
						<Paper className="p-4">%{pageProps.performance.toFixed(2)}</Paper>
					</Grid>
				</Grid>
				<DetailPage data={pageProps} />
			</div>
		</SideBar>
	);
};

export default StockDetails;
