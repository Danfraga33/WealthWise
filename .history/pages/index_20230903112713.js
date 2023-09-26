import { useSession } from 'next-auth/react';

import Dashboard from './Dashboard/index.jsx';

export default function Home() {
	const sessionData = useSession();
	const session = sessionData.data;

	return <Dashboard />;
}
