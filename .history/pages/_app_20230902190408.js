import '@/styles/globals.css';
import SideBar from '../components/SideBar';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;
	return (
		<SessionProvider>
			<SideBar>
				<Component sessions={session} {...restPageProps} />
			</SideBar>
		</SessionProvider>
	);
}
