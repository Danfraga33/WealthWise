import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Welcome from '@/components/welcome';
import Login from './login';
import SideBar from '../components/SideBar';
import Dashboard from './Dashboard';

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		<SessionProvider>
			{session ? (
				<SideBar>
					<Dashboard />
				</SideBar>
			) : (
				<Login />
			)}
		</SessionProvider>
	);
}
