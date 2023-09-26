import { Card, Title, BarChart, Subtitle } from '@tremor/react';

const chartdata2 = [
	{
		name: 'Topic 1',
		'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
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
				'Group G',
				'Group H',
				'Group I',
				'Group J',
				'Group K',
			]}
			colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
			valueFormatter={dataFormatter}
			yAxisWidth={48}
		/>
	</Card>
);

export default BarChartComponent;
