import { Card, Title, LineChart } from '@tremor/react';

const chartdata = [
	{
		year: 2015,
		'Revenue Growth': 12.04,
		'Customer Growth': 5.53,
	},
	{
		year: 2016,
		'Revenue Growth': 11.85,
		'Customer Growth': 5.61,
	},
	{
		year: 2017,
		'Revenue Growth': 12.17,
		'Customer Growth': 5.42,
	},
	{
		year: 2018,
		'Revenue Growth': 11.98,
		'Customer Growth': 5.56,
	},
	{
		year: 2019,
		'Revenue Growth': 12.22,
		'Customer Growth': 5.38,
	},
	{
		year: 2020,
		'Revenue Growth': 11.73,
		'Customer Growth': 5.65,
	},
	{
		year: 2021,
		'Revenue Growth': 12.06,
		'Customer Growth': 5.5,
	},
	{
		year: 2022,
		'Revenue Growth': 11.92,
		'Customer Growth': 5.59,
	},
	{
		year: 2023,
		'Revenue Growth': 12.14,
		'Customer Growth': 5.45,
	},
];

const dataFormatter = (number) =>
	`${Intl.NumberFormat('us').format(number).toString()}%`;

const LineChartComponent = () => (
	<Card>
		<Title>Export/Import Growth Rates (1970 to 2021)</Title>
		<LineChart
			className="mt-6"
			data={chartdata}
			index="year"
			categories={['Revenue Growth', 'Customer Growth']}
			colors={['emerald', 'gray']}
			valueFormatter={dataFormatter}
			yAxisWidth={40}
		/>
	</Card>
);

export default LineChartComponent;
