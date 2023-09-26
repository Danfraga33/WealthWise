import { Card, Title, LineChart } from '@tremor/react';

const chartdata = [
	{
		year: 2008,
		Networth: 231223,
	},
	{
		year: 2012,
		Networth: 836482,
	},
	{
		year: 2016,
		Networth: 1107325,
	},
	{
		year: 2020,
		Networth: 1923567,
	},
	{
		year: 2024,
		Networth: 2632230,
	},
	// ...
];

const dataFormatter = (number) =>
	`$${Intl.NumberFormat('us').format(number).toString()}`;

const LineChartComponent = () => (
	<Card>
		<Title>Networth</Title>
		<div>
			<LineChart
				className="mt-6 w-full"
				data={chartdata}
				index="year"
				categories={['Networth']}
				colors={['green', 'gray']}
				valueFormatter={dataFormatter}
				yAxisWidth={80}
			/>
		</div>
	</Card>
);

export default LineChartComponent;
