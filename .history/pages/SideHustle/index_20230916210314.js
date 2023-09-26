import React from 'react';
import { Card, Metric, Text } from '@tremor/react';

const index = () => {
	return (
		<Card
			className="max-w-xs mx-auto"
			decoration="top"
			decorationColor="indigo"
		>
			<Text>Sales</Text>
			<Metric>$ 34,743</Metric>
		</Card>
	);
};

export default index;
