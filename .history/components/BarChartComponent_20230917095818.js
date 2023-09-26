import { Card, Title, BarChart, Subtitle } from '@tremor/react';

const chartdata2 = [
	{
		name: 'Topic 1',
		'Group A': 890,
		'Group B': 338,
		'Group C': 538,
		'Group D': 396,
		'Group E': 138,
		'Group F': 436,
	},
	{
		name: 'Topic 2',
		'Group A': 289,
		'Group B': 233,
		'Group C': 253,
		'Group D': 333,
		'Group E': 133,
		'Group F': 533,
	},
];

const dataFormatter = (number) => {
	return '$ ' + Intl.NumberFormat('us').format(number).toString();
};

const BarChartComponent = () => (
	<Card>
		<Title>Revenue Trend</Title>
		<BarChart
			className="mt-6 w-full"
			data={chartdata2}
			index="name"
			categories={[
				'Group A',
				'Group B',
				'Group C',
				'Group D',
				'Group E',
				'Group F',
			]}
			colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
			valueFormatter={dataFormatter}
			yAxisWidth={48}
		/>
	</Card>
);

export default BarChartComponent;
