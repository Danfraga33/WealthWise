import React from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

async function getStaticPaths() {
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=demo`;

	const response = await fetch(url);

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
	const id = context.params.id;
	const res = fetch();
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
