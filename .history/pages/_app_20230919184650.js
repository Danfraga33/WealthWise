import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import CompoundContextProvider from '../contextstore/DataContext';
import { Oswald } from '@next/font/google';

const oswald = Oswald({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		<CompoundContextProvider>
			<SessionProvider session={pageProps.session}>
				<main className={oswald.className}>
					<Component pageProps={pageProps} />
				</main>
			</SessionProvider>
		</CompoundContextProvider>
	);
}
