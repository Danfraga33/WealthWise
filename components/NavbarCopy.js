import Link from 'next/link';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavbarCopy = () => {
	const { user } = useUser();
	console.log('USER:', user);
	return (
		<div>
			<div>
				<nav className="bg-white p-2">
					<div className="container">
						<div className="flex justify-between items-center">
							<div className="md:block hidden text-center">
								<h1 className="text-black text-2xl font-bold">WealthWave</h1>
							</div>
							<div className="text-center md:w-1/2">
								<ul className="flex space-x-4 text-lg items-center">
									<li className="hover:text-blue-500">
										<Link href="/" className="hover:text-white">
											<button className="hover:text-white">Home</button>
										</Link>
									</li>
									<li className="hover:text-blue-500">
										<Link href="/Dashboard" className="hover:text-white">
											<button className="hover:text-white">Dashboard</button>
										</Link>
									</li>
									{user ? (
										<>
											<div>
												<Link href="/api/auth/logout">Logout</Link>
											</div>
											<div>
												<Image
													src={user.picture}
													alt={user.name}
													height={50}
													width={50}
												/>
											</div>
										</>
									) : (
										<li>
											<Link href="/api/auth/login">Login</Link>
										</li>
									)}
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavbarCopy;
