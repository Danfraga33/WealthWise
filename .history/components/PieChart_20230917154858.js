import { Card, Title, DonutChart } from '@tremor/react';

const cities = [
	{
		name: 'Smart Fitness Tracker',
		sales: 9800,
	},
	{
		name: 'Wireless Noise-Canceling Headphones',
		sales: 4567,
	},
	{
		name: 'Hong Kong',
		sales: 3908,
	},
	{
		name: 'San Francisco',
		sales: 2400,
	},
	{
		name: 'Singapore',
		sales: 1908,
	},
	{
		name: 'Zurich',
		sales: 1398,
	},
];

const valueFormatter = (number) =>
	`$ ${Intl.NumberFormat('us').format(number).toString()}`;

const DonutChartComponent = () => (
	<Card className="max-w-lg">
		<Title>Sales</Title>
		<DonutChart
			className="mt-6"
			data={cities}
			category="sales"
			index="name"
			valueFormatter={valueFormatter}
			colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
		/>
	</Card>
);

export default DonutChartComponent;
