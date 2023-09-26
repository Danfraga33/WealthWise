import React from 'react';

const Product = () => {
	return (
		<div className="max-w-screen-md mx-auto p-6 text-center">
			<h2 className="text-3xl font-semibold mb-4">
				Track Your Net Worth with Our App
			</h2>
			<p className="text-gray-600">
				Welcome to our Net Worth Tracker app! We understand the importance of
				managing your finances and working towards your financial goals. Our app
				helps you keep a close eye on your net worth by tracking three key
				areas:
			</p>
			<div className="mt-8">
				<h3 className="text-xl font-semibold mb-2">1. E-commerce</h3>
				<p className="text-gray-600">
					Easily monitor your online business activities, including sales,
					expenses, and profits. Our app provides insights into your e-commerce
					financial health.
				</p>
			</div>
			<div className="mt-8">
				<h3 className="text-xl font-semibold mb-2">2. Investments</h3>
				<p className="text-gray-600">
					Keep track of your investment portfolio, including stocks, bonds, real
					estate, and more. See how your investments are performing and their
					impact on your net worth.
				</p>
			</div>
			<div className="mt-8">
				<h3 className="text-xl font-semibold mb-2">3. Job</h3>
				<p className="text-gray-600">
					Monitor your income from your job or multiple jobs. We help you
					visualize your salary, bonuses, and other income sources, so you can
					plan for your financial future.
				</p>
			</div>
			<p className="mt-8 text-gray-600">
				Set a capital amount that you aspire to achieve, and our app will help
				you track your progress towards that goal. Whether you're looking to
				save for a major purchase, retirement, or financial independence, we've
				got you covered.
			</p>
			<p className="mt-8 text-gray-600">
				Start taking control of your finances today. Sign up for our Net Worth
				Tracker app and embark on your journey to financial success.
			</p>
			{/* Add buttons or links for sign-up or more information */}
		</div>
	);
};

export default Product;
