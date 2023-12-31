import React from 'react';
import { Card, Title, Metric, Text } from '@tremor/react';

const SaleLocations = () => {
	return (
		<div>
			<div className="p-8 bg-gray-500 rounded-lg shadow ">
				<div className="mb-4">
					<h2 className="text-white md:text-xl text-center">Yearly Progress</h2>
				</div>
				<div className="  md:w-full md:grid md:grid-cols-3   ">
					<Card
						className="max-w-xs mx-auto text-center mb-3
      "
						decoration="top"
						decorationColor="indigo"
					>
						<Text>Sales</Text>
						<Metric>$312,221.7</Metric>
					</Card>
					<Card
						className="max-w-xs mx-auto text-center mb-3"
						decoration="top"
						decorationColor="indigo"
					>
						<Text>Expenses</Text>
						<Metric>$93,666.3</Metric>
					</Card>
					<Card
						className="max-w-xs mx-auto text-center mb-3"
						decoration="top"
						decorationColor="indigo"
					>
						<Text>Profit</Text>
						<Metric>$218,554.7</Metric>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default SaleLocations;
