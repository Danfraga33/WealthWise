import Head from 'next/head';
import Header from '@/components/Header.jsx';
import TopCards from '../components/TopCards.jsx';
import LineChart from '../components/LineChart.jsx';
import Holdings from '../components/Holdings.jsx';
import { useSession } from 'next-auth/react';
import Dashboard from './Dashboard/index.jsx';
import Login from '@/components/Login/Login.jsx';
import Link from 'next/link.js';
import Welcome from '@/components/welcome.jsx';

export default function Home() {
	const sessionData = useSession();
	const session = sessionData.data;

	console.log(session);

	return (
		<>
			{session ? <Dashboard /> : <Welcome />}
			{/* {!session ? <Login /> : <Dashboard />} */}
			{/* <Head>
				<title>Investor Centre</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-gray-100 min-h-screen">
				<Header />

				<>
					<TopCards />
					<div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
						<LineChart />
						<Holdings />
					</div>
				</> */}
			{/* </main> */}
		</>
	);
}
