import React from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

async function getStaticPaths() {
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=demo`;

	const res = await fetch(url);
	const data = await res.json();

	const paths = data.map((stock) => {
		return {
			params: {
				id: stock.id.toString(),
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const ticker = context.params.id;
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=demo`;

	const data = await fetch(url);
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
