import React from 'react';

const Pricing = () => {
	return (
		<section className="bg-gray-100 py-16">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
					Choose the Right Plan for You
				</h2>
				<p className="mt-4 text-xl text-gray-500 text-center">
					Get started with our pricing plans. You can cancel at any time.
				</p>

				<div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{/* Free Plan */}
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-2xl font-semibold text-gray-900">Free Plan</h3>
						<p className="mt-4 text-4xl font-extrabold text-gray-900">
							$0<span className="text-xl font-normal text-gray-500">/mo</span>
						</p>
						<ul className="mt-6 space-y-4">
							<li className="flex items-start">
								<svg
									className="w-6 h-6 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<span className="ml-3 text-gray-700">E-commerce Tracking</span>
							</li>
							{/* Add more features for the Free Plan */}
						</ul>
						<div className="mt-8">
							<a
								href="#"
								className="block w-full py-2 text-center font-semibold text-white bg-gray-500 hover:bg-gray-600 rounded-lg transition duration-300"
							>
								Get Started
							</a>
						</div>
					</div>

					{/* Basic Plan */}
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-2xl font-semibold text-gray-900">Basic Plan</h3>
						<p className="mt-4 text-4xl font-extrabold text-gray-900">
							$9<span className="text-xl font-normal text-gray-500">/mo</span>
						</p>
						<ul className="mt-6 space-y-4">
							<li className="flex items-start">
								<svg
									className="w-6 h-6 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<span className="ml-3 text-gray-700">
									Unlimited E-commerce Tracking
								</span>
							</li>
							<li className="flex items-start">
								<svg
									className="w-6 h-6 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<span className="ml-3 text-gray-700">
									Investment Portfolio Tracking
								</span>
							</li>
							{/* Add more features for the Basic Plan */}
						</ul>
						<div className="mt-8">
							<a
								href="#"
								className="block w-full py-2 text-center font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300"
							>
								Get Started
							</a>
						</div>
					</div>

					{/* Premium Plan */}
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-2xl font-semibold text-gray-900">
							Premium Plan
						</h3>
						<p className="mt-4 text-4xl font-extrabold text-gray-900">
							$19<span className="text-xl font-normal text-gray-500">/mo</span>
						</p>
						<ul className="mt-6 space-y-4">
							<li className="flex items-start">
								<svg
									className="w-6 h-6 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<span className="ml-3 text-gray-700">
									Unlimited E-commerce Tracking
								</span>
							</li>
							<li className="flex items-start">
								<svg
									className="w-6 h-6 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<span className="ml-3 text-gray-700">
									Investment Portfolio Tracking
								</span>
							</li>
							<li className="flex items-start">
								<svg
									className="w-6 h-6 text-green-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<span className="ml-3 text-gray-700">Job Income Tracking</span>
							</li>
							{/* Add more features for the Premium Plan */}
						</ul>
						<div className="mt-8">
							<a
								href="#"
								className="block w-full py-2 text-center font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
