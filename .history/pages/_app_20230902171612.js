import '@/styles/globals.css';
import SideBar from '../components/SideBar';
import { SessionProvider } from 'next-auth/react';
const { session, ...pageProps } = pageProps;,

export default function App ({ Component, pageProps }) {
	Component,
	return (
		<SideBar>
			<Component {...pageProps} />
		</SideBar>
	);
}
