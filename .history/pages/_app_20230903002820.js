import '@/styles/globals.css';
import SideBar from '../components/SideBar';
import { SessionProvider } from 'next-auth/react';
import Welcome from '@/components/welcome';
import Login from './login';

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		<SessionProvider>
			<SideBar>
				<Dashboard />
			</SideBar>
		</SessionProvider>
	);
}
