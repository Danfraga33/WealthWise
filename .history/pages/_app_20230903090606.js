import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';

import Login from './Login';
import Dashboard from './Dashboard';

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		<SessionProvider>
			<Login />
			<Dashboard />
		</SessionProvider>
	);
}
