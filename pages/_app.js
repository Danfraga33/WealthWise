import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import CompoundContextProvider from '../contextstore/DataContext';
import { Inter } from '@next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		<CompoundContextProvider>
			<SessionProvider session={pageProps.session}>
				<main className={inter.className}>
					<Component pageProps={pageProps} />
				</main>
			</SessionProvider>
		</CompoundContextProvider>
	);
}
