import React, { useState } from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

async function getStaticPaths() {
	// const res = await fetch(url);
	// const data = await res.json();


		return {
			paths: [
				{
					params: {
						stock: "IBM",
					}
				},
			]
			},
	);
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const id = context.params.ticker;
	// const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=demo`;

	console.log(id);
	return {
		props: {
			stockData: {
				ticker: 'IBM',
			},
		},
	};
}

const ticker = () => {
	return (
		<SideBar>
			<Header />
			<div>
				<h1>Details Page</h1>
			</div>
		</SideBar>
	);
};

export default ticker;
