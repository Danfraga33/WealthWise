import Head from 'next/head';
import Header from '@/components/Header.jsx';
import login from './login.jsx';
import TopCards from '../components/TopCards.jsx';
import LineChart from '../components/LineChart.jsx';
import Holdings from '../components/Holdings.jsx';
import { useSession } from 'next-auth/react';

export default function Home() {
	const sessionData = useSession();
	const session = sessionData.data;
	return (
		<>
			<Head>
				<title>Investor Centre</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-gray-100 min-h-screen">
				<Header />
				{session ? (
					<>
						<TopCards />
						<div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
							<LineChart />
							<Holdings />
						</div>
					</>
				) : (
					<Link href="/">
							<login />
							<Link>
				)}
			</main>
		</>
	);
}
