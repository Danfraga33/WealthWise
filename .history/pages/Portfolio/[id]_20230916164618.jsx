import React, { useState } from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import connectDB from '../../components/db';

///////////// Tells which stock should be rendered
// 1. LINK on portfolio is for id
// 2. 
export async function getStaticPaths() {
	connectDB();
	const stockIds = await Stock.find({}, { _id: 1 }).lean();
	const paths = stockIds.map((stock) => ({
		console.log(stockIds);
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
