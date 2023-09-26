import { Card, Title, BarChart, Subtitle } from '@tremor/react';

const chartdata2 = [
	{
		name: '2023',
		Jan: 1200,
		Feb: 899,
		Mar: 987,
		Apr: 789,
		May: 1622,
		Jun: 1432,
		Jul: 1889,
		Aug: 1129,
		Sep: 2219,
		Oct: 4390,
		Nov: 3890,
		Dec: 5360,
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
			colors={[
				'red',
				'orange',
				'yellow',
				'green',
				'blue',
				'purple',
				'pink',
				'teal',
				'brown',
				'gray',
				'indigo',
				'cyan',
				'magenta',
			]}
			valueFormatter={dataFormatter}
			yAxisWidth={48}
		/>
	</Card>
);

export default BarChartComponent;
