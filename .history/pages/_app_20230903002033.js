import '@/styles/globals.css';
import SideBar from '../components/SideBar';
import { SessionProvider } from 'next-auth/react';
import welcome from '@/components/welcome';

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		<SessionProvider>
			{session ? (
				<SideBar>
					<Dashboard />
				</SideBar>
			) : (
				<welcome />
			)}
		</SessionProvider>
	);
}
