import { Card, Title, BarChart, Subtitle } from '@tremor/react';

const chartdata2 = [
	{
		name: 'Topic 1',
		Jan: 890,
		Feb: 338,
		Mar: 538,
		Apr: 396,
		May: 138,
		Jun: 436,
		Jul: 890,
		Aug: 338,
		Sep: 538,
		Oct: 138,
		Nov: 436,
		Dec: 536,
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
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			]}
			colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
			valueFormatter={dataFormatter}
			yAxisWidth={48}
		/>
	</Card>
);

export default BarChartComponent;
