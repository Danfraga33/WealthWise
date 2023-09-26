import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import CompoundContextProvider from '../contextstore/DataContext';
import { Oswald } from '@next/font/google';

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		<CompoundContextProvider>
			<SessionProvider session={pageProps.session}>
				<Component pageProps={pageProps} />
			</SessionProvider>
		</CompoundContextProvider>
	);
}
