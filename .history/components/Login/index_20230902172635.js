import { useSession, signIn, signOut } from 'next-auth/react';

const index = () => {
	const sessionData = useSession(); // Assuming useSession() returns an object

	const session = sessionData.data;
	return <div>index</div>;
};

export default index;
