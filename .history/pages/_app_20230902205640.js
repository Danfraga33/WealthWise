import '@/styles/globals.css';
import SideBar from '../components/SideBar';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
	const sessionData = useSession();
	const session = sessionData.data;
	return (
		<SessionProvider>
			{session ?
			<SideBar>
				<Component sessions={session} {...restPageProps} />
			</SideBar>}
		</SessionProvider>
	);
}
