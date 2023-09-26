import React, { useState } from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import connectDB from '../../components/db';

export async function getStaticPaths() {
	connectDB();
	const portfolioData = await Stock.find({}, { _id: 1 }).lean();
	const portoData = pageProps.portfolioData;
	console.log(portoData);
	return {
		fallback: false,
		paths: portoData.map((stock) => ({
			params: {
				id: stock._id.toString(),
			},
		})),
	};
}

export async function getStaticProps(context) {
	const id = context.params.ticker;

	// console.log(id);
	return {
		props: {
			stockData: {
				ticker: 'IBM',
				lastPrice: 'IBM',
			},
		},
	};
}

const ticker = (props) => {
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

export default ticker;
