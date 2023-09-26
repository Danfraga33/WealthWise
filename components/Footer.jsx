import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-8 mx-auto">
					<div className="flex flex-col items-center text-center pb-10">
						<p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
							Tracking to Financial Freedom
						</p>

						<div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center mb-5">
							<button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 p-5">
								<Link href="/Dashboard">Get started</Link>
							</button>
						</div>
					</div>

					<hr className="my-10 border-gray-200 dark:border-gray-700" />

					<div className="flex flex-col items-center sm:flex-row sm:justify-between">
						<p className="text-sm text-gray-500">
							© Copyright 2021. All Rights Reserved.
						</p>

						{/* <div className="flex mt-3 -mx-2 sm:mt-0">
							<a
								href="#"
								className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
								aria-label="Reddit"
							>
								{' '}
								Teams{' '}
							</a>
							<a
								href="#"
								className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
								aria-label="Reddit"
							>
								{' '}
								Privacy{' '}
							</a>
							<a
								href="#"
								className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
								aria-label="Reddit"
							>
								{' '}
								Cookies{' '}
							</a>
						</div> */}
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
