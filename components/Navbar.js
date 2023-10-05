// import Link from 'next/link';
// import React from 'react';
// import { useRouter } from 'next/router';

// const Navbar = () => {
// 	const sessionData = useSession();
// 	const session = sessionData.data;
// 	const router = useRouter();

// 	async function handleSignIn(e) {
// 		e.preventDefault();
// 		await signIn();
// 	}

// 	async function handleSignOut() {
// 		sessionStorage.clear();
// 		await signOut({ redirect: false, callbackUrl: '/' });
// 		// router.push('/');
// 	}
// 	return (
// <div>
// 	<nav className="bg-white p-4">
// 		<div className="container">
// 			<div className="flex justify-between items-center">
// 				<div className="md:block hidden text-center">
// 					<h1 className="text-black text-2xl font-bold">WealthWave</h1>
// 				</div>
// 				<div className="text-center md:w-1/2">

// 											<ul className="flex space-x-4 text-lg">
// 						<li className="hover:text-blue-500">
// 							<Link href="/" className="hover:text-white">
// 								<button className="hover:text-white">Home</button>
// 							</Link>
// 						</li>
// 						<li className="hover:text-blue-500">
// 							<Link href="/Dashboard" className="hover:text-white">
// 								<button className="hover:text-white">Dashboard</button>
// 							</Link>
// 						</li>
// 						<li>
// 							{session ? (
// 								<button
// 									className="hover:text-blue-500"
// 									onClick={handleSignOut}
// 								>
// 									Sign Out
// 								</button>
// 							) : (
// 								<button
// 									className="hover:text-blue-500"
// 									onClick={handleSignIn}
// 								>
// 									Sign In
// 								</button>
// 							)}
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	</nav>
// </div>
// 	);
// };

// export default Navbar;
