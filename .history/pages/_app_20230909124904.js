import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';



export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		
		<SessionProvider>
			
				<Component pageProps={...pageProps} />
		</SessionProvider>
	);
}
