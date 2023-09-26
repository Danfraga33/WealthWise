import React, { useState } from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import connectDB from '../../components/db';

export async function getStaticPaths() {
	connectDB();
	const stockIds = await Stock.find({}, { _id: 1 }).lean();
	const paths = stockIds.map((stock) => ({
		params: {
			id: stock._id.toString(),
		},
	}));
	console.log(paths);
	return {
		fallback: false,
		paths,
	};
}

export async function getStaticProps(context) {
	return {
		props: {},
	};
}

const stockDetails = (props) => {
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
