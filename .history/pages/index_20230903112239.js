import { useSession } from 'next-auth/react';
import Portfolio from './Portfolio.js';

export default function Home() {
	const sessionData = useSession();
	const session = sessionData.data;

	return <Dashboard />;
}
