import '@/styles/globals.css';
import SideBar from '../components/SideBar';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
	let { session, ...pageProps } = pageProps;
	Component;
	return (
		<SideBar>
			<SessionProvider></SessionProvider>
			<Component {...pageProps} />
		</SideBar>
	);
}
