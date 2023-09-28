import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
	const sessionData = useSession();
	const session = sessionData.data;
	return (
		<div>
			<nav className="bg-white p-4">
				<div className="container">
					<div className="flex justify-between w-100 items-center">
						<h1 className="text-black text-2xl font-bold">WealthWave</h1>
						<ul className="flex space-x-4 text-lg ">
							<li className="hover:text-blue-500 ">
								<Link href="/Dashboard" className="hover:text-white">
									<button className="hover:text-white">Home</button>
								</Link>
							</li>
							<li className="hover:text-blue-500 ">
								<Link href="/Dashboard" className="hover:text-white">
									<button className="hover:text-white">Dashboard</button>
								</Link>
							</li>
							<li>
								{session ? (
									<button
										className="hover:text-blue-500"
										onClick={() => signOut()}
									>
										Sign Out
									</button>
								) : (
									<button
										className="hover:text-blue-500"
										onClick={() => signIn()}
									>
										Sign In
									</button>
								)}
							</li>
						</ul>
						{/* 
						<div className="text-lg">
							{!session && <button onClick={() => signIn()}>Sign in</button>}
						</div> */}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
