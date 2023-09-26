import React, { useState } from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import connectDB from '../../components/db';

export async function getStaticPaths() {
	connectDB();
	const portfolioData = await Stock.find({}, { _id: 1 }).lean();
	console.log(portfolioData);
	return {
		fallback: false,
		paths: portfolioData.map((stock) => ({
			params: {
				id: stock._id.toString(),
			},
		})),
	};
}

export async function getStaticProps(context) {
	const id = context.params.id;

	// console.log(id);
	return {
		props: {
			stockData: {},
		},
	};
}

const stockId = (props) => {
	const stockData = props.pageProps.stockData;
	// console.log(stockData);
	return (
		<SideBar>
			<Header />
			<div>
				<h1>Detail Page</h1>
				<p>{stockData.ticker}</p>
				<p>{stockData.lastPrice}</p>
			</div>
		</SideBar>
	);
};

export default stockId;
