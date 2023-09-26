import '@/styles/globals.css';
import SideBar from '../components/SideBar';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;
	Component;
	return (
		<SideBar>
			<SessionProvider>
				<Component essions={session} {...pageProps} />
			</SessionProvider>
		</SideBar>
	);
}
