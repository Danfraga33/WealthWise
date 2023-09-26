import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { ToastProvider } from '@/components/ToastContext';


export default function App({ Component, pageProps }) {
	const { session, ...restPageProps } = pageProps;

	return (
		
		<SessionProvider>
			<ToastProvider>
			
	
				<Component pageProps={...pageProps} />
			
		

		</ToastProvider>
		</SessionProvider>
	);
}
