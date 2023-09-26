import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Router from 'next/router';

const Login = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	console.log(session);

	const router = useRouter();

	const handleSignOut = () => {
		// Perform the navigation without updating the address bar
		router.push('/api/auth/signin?error=OAuthCallback', undefined, {
			shallow: true,
		});
	};
	if (session) {
		return (
			<>
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	);
};

export default Login;
