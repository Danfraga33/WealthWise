import React, { useState } from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import connectDB from '../../components/db';

///////////// Tells which stock should be rendered
// 1. Create a Link in the Parent Page
// 2. Define Dynamic Route in Next.js
// 3. Fetch and Display Dynamic Content

//  Telling Next.js which specific paths, or routes, should be pre-rendered as static HTML pages during the build process.
export async function getStaticPaths() {
	connectDB();
	const stockIds = await Stock.find({}, { _id: 1 }).lean();

	console.log(stockIds);
	const paths = stockIds.map((stock) => ({
		params: {
			id: stock._id.toString(),
		},
	}));
	console.log(paths);
	return {
		fallback: false,
		paths,
	};
}

export async function getStaticProps(context) {
	return {
		props: {
			stockName: 'IBM',
			lastPrice: 14.22,
		},
	};
}

const stockDetails = ({ pageProps }) => {
	console.log(pageProps);
	return (
		<SideBar>
			<Header />
			<div>
				<h1>Detail Page</h1>
				<p>{pageProps.stockName}</p>
				<p>{pageProps.lastPrice}</p>
			</div>
		</SideBar>
	);
};

export default stockDetails;
