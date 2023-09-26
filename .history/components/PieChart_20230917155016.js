import { Card, Title, DonutChart } from '@tremor/react';

const cities = [
	{
		name: 'Smart Fitness Tracker',
		sales: 4577,
	},
	{
		name: 'Wireless Noise-Canceling Headphones',
		sales: 4167,
	},
	{
		name: 'Bamboo Charcoal Air Purifiers',
		sales: 2102,
	},
	{
		name: 'Handcrafted Leather Wallets',
		sales: 912,
	},
	{
		name: 'Organic Matcha Green Tea',
		sales: 330,
	},
	{
		name: 'Smart Water Bottle with Hydration Tracker',
		sales: 289,
	},
	{
		name: 'Meditation and Sleep Aid Device',
		sales: 211,
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
