import '@/styles/globals.css';
import SideBar from '../components/SideBar';
import { SessionProvider } from 'next-auth/react';
import Welcome from '@/components/welcome';
import Header from '@/components/Header';

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		<SessionProvider>
			{session ? (
				<SideBar>
					<Dashboard />
				</SideBar>
			) : (
				<Header />
			)}
		</SessionProvider>
	);
}
