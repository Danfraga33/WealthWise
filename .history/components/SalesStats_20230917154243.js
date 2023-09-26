import React from 'react';
import { Card, Title, Metric, Text } from '@tremor/react';

const SaleLocations = () => {
	return (
		<div>
			<div className="p-8 bg-gray-500 rounded-lg">
				<div className="mb-4">
					<h2 className="text-white md:text-xl text-center">
						Today's Progress
					</h2>
				</div>
				<div className="  md:w-full md:grid md:grid-cols-3  ">
					<Card
						className="max-w-xs mx-auto sm:text-center
      "
						decoration="top"
						decorationColor="indigo"
					>
						<Text>Sales</Text>
						<Metric>$312,221.7</Metric>
					</Card>
					<Card
						className="max-w-xs mx-auto sm:text-center"
						decoration="top"
						decorationColor="indigo"
					>
						<Text>Expenses</Text>
						<Metric>$93666.3</Metric>
					</Card>
					<Card
						className="max-w-xs mx-auto"
						decoration="top"
						decorationColor="indigo"
					>
						<Text>Profit</Text>
						<Metric>$218555</Metric>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default SaleLocations;
