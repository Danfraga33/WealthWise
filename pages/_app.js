import '@/styles/globals.css';
import CompoundContextProvider from '../contextstore/DataContext';
import { Inter } from '@next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		<UserProvider>
			<CompoundContextProvider>
				<main className={inter.className}>
					<Component pageProps={pageProps} />
				</main>
			</CompoundContextProvider>
		</UserProvider>
	);
}
