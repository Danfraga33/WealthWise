import React, { useState } from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					ticker: 'IBM',
				},
				params: {
					ticker: 'asddadsasd',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=demo`;
	const id = context.params.ticker;

	console.log(id);
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
	console.log(stockData);
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
