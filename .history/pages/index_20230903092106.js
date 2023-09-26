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
			<Login />
		</>
	);
}
