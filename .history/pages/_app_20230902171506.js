import '@/styles/globals.css';
import SideBar from '../components/SideBar';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
	return (
		<SideBar>
			<Component {...pageProps} />
		</SideBar>
	);
}
