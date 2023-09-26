import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const Login = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	console.log(session);

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
