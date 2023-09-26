import React, { useState } from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import connectDB from '../../components/db';

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {
					id: 'IBM',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	const id = context.params.id;

	console.log(id);
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
				<p>IBM</p>
				<p>IBM</p>
			</div>
		</SideBar>
	);
};

export default stockId;
