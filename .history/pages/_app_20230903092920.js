import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Login from './Login';
import Dashboard from './Dashboard';
import SideBar from '@/components/SideBar';

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		<SessionProvider>
			<SideBar
			<Dashboard />
		</SessionProvider>
	);
}
