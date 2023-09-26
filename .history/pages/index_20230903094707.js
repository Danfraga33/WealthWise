import Head from 'next/head';
import Header from '@/components/Header.jsx';
import TopCards from '../components/TopCards.jsx';
import LineChart from '../components/LineChart.jsx';
import Holdings from '../components/Holdings.jsx';
import { useSession } from 'next-auth/react';

import Portfolio from './Portfolio.js';

export default function Home() {
	const sessionData = useSession();
	const session = sessionData.data;

	return <Portfolio />;
}
