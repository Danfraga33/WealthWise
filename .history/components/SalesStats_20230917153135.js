import React from 'react';
import { Card, Title, Metric, Text } from '@tremor/react';

const SaleLocations = () => {
	const data = [
		{sales: 34743},
		{sales: 34,743}
	]


	return (
		<div>
			<div className="p-8 bg-gray-500 rounded-lg">
				<div className="mb-4">
					<h2 className="text-white md:text-xl text-center">
						Today's Progress
					</h2>
				</div>
				<div className="flex  md:w-full gap-6 md:grid md:grid-cols-3  ">
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
						<Metric></Metric>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default SaleLocations;
