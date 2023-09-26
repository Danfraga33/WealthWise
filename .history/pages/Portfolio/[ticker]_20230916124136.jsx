import React from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

async function getStaticPaths() {
	connectDB();
	const data = await Stock.find().lean();

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
