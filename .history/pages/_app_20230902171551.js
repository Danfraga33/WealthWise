import '@/styles/globals.css';
import SideBar from '../components/SideBar';
import { SessionProvider } from 'next-auth/react';

export default function App ({ Component, pageProps }) {
	Component,
	 { session, ...pageProps } = pageProps;,
	return (
		<SideBar>
			<Component {...pageProps} />
		</SideBar>
	);
}
