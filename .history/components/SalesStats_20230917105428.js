import React from 'react';

const SalesStats = () => {
	return (
		<div>
			<div className="md:p-8 md:bg-gray-500 rounded-lg">
				<div className="mb-4">
					<h2 className="text-white text-xl">Today's Progress</h2>
				</div>
				<div className="flex flex-col md:w-full gap-6 md:grid md:grid-cols-3 ">
					<Card
						className="max-w-xs mx-auto
      "
						decoration="top"
						decorationColor="indigo"
					>
						<Text>Sales</Text>
						<Metric>$ 34,743</Metric>
					</Card>
					<Card
						className="max-w-xs mx-auto"
						decoration="top"
						decorationColor="indigo"
					>
						<Text>Expenses</Text>
						<Metric>$ 34,743</Metric>
					</Card>
					<Card
						className="max-w-xs mx-auto"
						decoration="top"
						decorationColor="indigo"
					>
						<Text>Profit</Text>
						<Metric>$ 34,743</Metric>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default SalesStats;
