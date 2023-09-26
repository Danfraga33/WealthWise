import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
	const sessionData = useSession();
	const session = sessionData.data;

	if (session) {
		return (
			<>
				Signed in as {session?.user?.email} <br />
				<p>Welcome {session.user.name}</p>
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
