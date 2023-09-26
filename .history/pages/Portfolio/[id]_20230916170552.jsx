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

	const stockIds = await Stock.findById(id).lean();

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
	connectDB();
	const id = context.params.id;
	const portfolioData = await Stock.find(id).lean();
	console.log('NEW DATA', portfolioData);
	console.log('NEW ID', id);
	const props = portfolioData.map((stock) => {
		props: {
			name: stock.summary.name;
			lastprice: stock.lastPrice;
		}
	});
	return {
		props,
	};
}

const stockDetails = ({ pageProps }) => {
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
