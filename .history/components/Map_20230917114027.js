import { Card, Title, LineChart } from '@tremor/react';

const chartdata = [
	{
		year: 2015,
		'Profit Margin': 12.04,
		'Cost Margin': 5.53,
	},
	{
		year: 2016,
		'Profit Margin': 11.85,
		'Cost Margin': 5.61,
	},
	{
		year: 2017,
		'Profit Margin': 12.17,
		'Cost Margin': 5.42,
	},
	{
		year: 2018,
		'Profit Margin': 11.98,
		'Cost Margin': 5.56,
	},
	{
		year: 2019,
		'Profit Margin': 12.22,
		'Cost Margin': 5.38,
	},
	{
		year: 2020,
		'Profit Margin': 11.73,
		'Cost Margin': 5.65,
	},
	{
		year: 2021,
		'Profit Margin': 12.06,
		'Cost Margin': 5.5,
	},
	{
		year: 2022,
		'Profit Margin': 11.92,
		'Cost Margin': 5.59,
	},
	{
		year: 2023,
		'Profit Margin': 12.14,
		'Cost Margin': 5.45,
	},
];

// Rest of your code...

const dataFormatter = (number) =>
	`${Intl.NumberFormat('us').format(number).toString()}%`;

const LineChartComponent = () => (
	<Card>
		<Title>Export/Import Growth Rates (1970 to 2021)</Title>
		<LineChart
			className="mt-6"
			data={chartdata}
			index="year"
			categories={['Export Growth Rate', 'Import Growth Rate']}
			colors={['emerald', 'gray']}
			valueFormatter={dataFormatter}
			yAxisWidth={40}
		/>
	</Card>
);

export default LineChartComponent;
