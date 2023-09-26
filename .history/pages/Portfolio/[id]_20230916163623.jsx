import React, { useState } from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import connectDB from '../../components/db';

export async function getStaticPaths() {
	
	));
	return {
		fallback: false,
		paths,
	};
}

export async function getStaticProps(context) {
	connectDB();
	const stock = await Stock.findById(params.id);

	const id = context.params.id;
	console.log(id);
	return {
		props: {
			stock,
		},
	};
}

const stockDetails = (props) => {
	const stockData = props.stockData;
	console.log(props);
	return (
		<SideBar>
			<Header />
			<div>
				<h1>Detail Page</h1>
				<p>IBM</p>
				<p>IBM</p>
			</div>
		</SideBar>
	);
};

export default stockDetails;
