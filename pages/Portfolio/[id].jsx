import React from 'react';
import Stock from '@/models/stockModel';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import connectDB from '../../components/db';
import DetailPage from '@/components/DetailPage';
import { Grid, Paper } from '@mui/material';

///////////// Tells which stock should be rendered
// 1. Create a Link in the Parent Page
// 2. Define Dynamic Route in Next.js
// 3. Fetch and Display Dynamic Content

//  Telling Next.js which specific paths, or routes, should be pre-rendered as static HTML pages during the build process.
export async function getStaticPaths() {
	connectDB();

	const stockIds = await Stock.find({}, { _id: 1 }).lean();

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
	const stock = await Stock.findById(id).lean();

	const props = {
		stockName: stock.stockData.stockName,
		ticker: stock.stockData.ticker,
		lastPrice: stock.stockData.lastPrice,
		performance: stock.stockData.performance,
		avgPurchasePrice: stock.stockData.avgPurchasePrice,
		valueAtPurchase: stock.stockData.valueAtPurchase,
		positionSize: stock.stockData.positionSize,
	};

	return {
		props,
	};
}

const StockDetails = ({ pageProps }) => {
	return (
		<SideBar>
			<Header />
			<div className="p-2">
				<div className="flex justify-center text-center pb-2 w-full">
					<Grid container spacing={1} className=" text-center pb-2 w-1/2">
						<Grid item md>
							<Paper className="p-4">
								{pageProps.stockName}
								<span className="text-[10px]">{pageProps.ticker}</span>
							</Paper>
						</Grid>
					</Grid>
				</div>
				<Grid container spacing={3}>
					<Grid item md>
						<Paper className="p-4">${pageProps.lastPrice}</Paper>
					</Grid>
					<Grid item md>
						{/* <Paper className="p-4">%{pageProps.performance.toFixed(2)}</Paper> */}
					</Grid>
				</Grid>
				{/* <DetailPage data={pageProps} /> */}
				<div className="bg-white py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Recent News
							</h2>
							<p className="mt-2 text-lg leading-8 text-gray-600">
								Why {pageProps.stockName} is destined to grow in the near
								future!
							</p>
						</div>
						<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
							<article className="flex max-w-xl flex-col items-start justify-between">
								<div className="flex items-center gap-x-4 text-xs">
									<time dateTime="2020-03-16" className="text-gray-500">
										Mar 16, 2022
									</time>
									<a
										href="#"
										className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
									>
										Seeking Alpha
									</a>
								</div>
								<div className="group relative">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
										<a href="#">
											<span className="absolute inset-0"></span>
											{pageProps.stockName}... Swing & Miss
										</a>
									</h3>
									<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
										Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
										totam vitae illo. Non aliquid explicabo necessitatibus unde.
										Sed exercitationem placeat consectetur nulla deserunt vel.
										Iusto corrupti dicta.
									</p>
								</div>
								<div className="relative mt-8 flex items-center gap-x-4">
									{/* <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50"> */}
									<div className="text-sm leading-6">
										<p className="font-semibold text-gray-900">
											<a href="#">
												<span className="absolute inset-0"></span>
												Michael Foster
											</a>
										</p>
										<p className="text-gray-600">Software Developer</p>
									</div>
								</div>
							</article>
							<article className="flex max-w-xl flex-col items-start justify-between">
								<div className="flex items-center gap-x-4 text-xs">
									<time dateTime="2020-03-16" className="text-gray-500">
										Apr 1, 2023
									</time>
									<a
										href="#"
										className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
									>
										Bloomberg
									</a>
								</div>
								<div className="group relative">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
										<a href="#">
											<span className="absolute inset-0"></span>
											Earnings isnt everything! {pageProps.ticker} has more!
										</a>
									</h3>
									<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
										Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
										totam vitae illo. Non aliquid explicabo necessitatibus unde.
										Sed exercitationem placeat consectetur nulla deserunt vel.
										Iusto corrupti dicta.
									</p>
								</div>
								<div className="relative mt-8 flex items-center gap-x-4">
									{/* <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50"> */}
									<div className="text-sm leading-6">
										<p className="font-semibold text-gray-900">
											<a href="#">
												<span className="absolute inset-0"></span>
												Michael Foster
											</a>
										</p>
										<p className="text-gray-600">Equity Analyst</p>
									</div>
								</div>
							</article>
							<article className="flex max-w-xl flex-col items-start justify-between">
								<div className="flex items-center gap-x-4 text-xs">
									<time dateTime="2020-03-16" className="text-gray-500">
										Aug 16, 2023
									</time>
									<a
										href="#"
										className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
									>
										Reuters
									</a>
								</div>
								<div className="group relative">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
										<a href="#">
											<span className="absolute inset-0"></span>$
											{pageProps.lastPrice} is no where near expensive!
										</a>
									</h3>
									<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
										Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
										totam vitae illo. Non aliquid explicabo necessitatibus unde.
										Sed exercitationem placeat consectetur nulla deserunt vel.
										Iusto corrupti dicta.
									</p>
								</div>
								<div className="relative mt-8 flex items-center gap-x-4">
									{/* <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50"> */}
									<div className="text-sm leading-6">
										<p className="font-semibold text-gray-900">
											<a href="#">
												<span className="absolute inset-0"></span>
												Steven Gerrard
											</a>
										</p>
										<p className="text-gray-600">Investor</p>
									</div>
								</div>
							</article>

							{/* <!-- More posts... --> */}
						</div>
					</div>
				</div>
			</div>
		</SideBar>
	);
};

export default StockDetails;
