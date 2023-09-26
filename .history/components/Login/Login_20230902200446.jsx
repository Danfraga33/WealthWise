import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const Login = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	console.log(session);

	if (session) {
		return (
			<>
				<Link href="/api/auth/signin?error=OAuthCallback">
					<button onClick={() => signOut()}>Sign out</button>
				</Link>
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
