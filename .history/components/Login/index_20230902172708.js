import { useSession, signIn, signOut } from 'next-auth/react';

const index = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	return  if (session) {
      return (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
};

export default index;
