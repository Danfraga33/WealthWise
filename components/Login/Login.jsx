import LoginModal from '../LoginModal';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Login = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	const router = useRouter();

	async function handleSignout() {
		await signOut();
		router.push('/');
	}

	if (session) {
		return (
			<>
				<button onClick={handleSignout}>Sign out</button>
			</>
		);
	}
	return (
		<>
			{/* <LoginModal /> */}
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	);
};

export default Login;
