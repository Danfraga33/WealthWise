import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';
import Logo from './Logo';

const NavbarCopy = () => {
	const { user } = useUser();
	// console.log('USER:', user);
	// console.log(process.env);
	return (
		<div>
			<nav className="bg-white p-2">
				<div className="container">
					<div className="flex justify-between items-center">
						<Logo />
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
												height={45}
												width={45}
												className="rounded-lg"
											/>
										</div>
									</>
								) : (
									<li>
										<Link
											href="/api/auth/login"
											className="hover:text-orange-500"
										>
											Login
										</Link>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavbarCopy;
