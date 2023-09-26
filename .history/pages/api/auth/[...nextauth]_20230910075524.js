import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	secret: 'dajO+2JQQs+UQ+qblfOKGWtRZ9phdb9QEP2m7ipLrEU=',
};
export default NextAuth(authOptions);
