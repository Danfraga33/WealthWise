import React, { Fragment, useState, useContext } from 'react';
import Head from 'next/head';
import Header from '@/components/Header.jsx';
import TopCards from '@/components/TopCards.jsx';
import LineChart from '@/components/LineChart.jsx';
import Holdings from '@/components/Holdings.jsx';
import { useSession } from 'next-auth/react';
import SideBar from '@/components/SideBar';
import Login from '@/components/Login/Login';
import { CompoundContext } from '@/contextstore/DataContext';

const Dashboard = ({ portfolioData }) => {
	const sessionData = useSession();
	const session = sessionData.data;

	const contextCtx = useContext(CompoundContext);

	return (
		<Fragment>
			{/* Head */}

			<Head>
				<title>Investor Centre</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{session ? (
				<main className="bg-gray-100 min-h-screen">
					<Header>
						<SideBar portfolioData={portfolioData}>
							<TopCards portfolioData={portfolioData} />
							<div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
								<LineChart
									portfolioData={portfolioData}
									contextCtx={contextCtx}
								/>
								<Holdings portfolioData={portfolioData} />
							</div>
					</Header>
						</SideBar>
				</main>
			) : (
				<Login />
			)}
		</Fragment>
	);
};

export default Dashboard;
