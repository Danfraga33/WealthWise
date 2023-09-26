import { Card, Title, LineChart } from '@tremor/react';

const chartdata = [
	{
		year: 2015,
		'Gross Margin': 12.04,
		'Net Profit Margin': 5.53,
	},
	{
		year: 2016,
		'Gross Margin': 11.85,
		'Net Profit Margin': 5.61,
	},
	{
		year: 2017,
		'Gross Margin': 12.17,
		'Net Profit Margin': 5.42,
	},
	{
		year: 2018,
		'Gross Margin': 11.98,
		'Net Profit Margin': 5.56,
	},
	{
		year: 2019,
		'Gross Margin': 12.22,
		'Net Profit Margin': 5.38,
	},
	{
		year: 2020,
		'Gross Margin': 11.73,
		'Net Profit Margin': 5.65,
	},
	{
		year: 2021,
		'Gross Margin': 12.06,
		'Cost Margin': 5.5,
	},
	{
		year: 2022,
		'Gross Margin': 11.92,
		'Cost Margin': 5.59,
	},
	{
		year: 2023,
		'Gross Margin': 12.14,
		'Net Profit Margin': 5.45,
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
			categories={['Gross Margin', 'Net Profit Margin']}
			colors={['emerald', 'gray']}
			valueFormatter={dataFormatter}
			yAxisWidth={40}
		/>
	</Card>
);

export default LineChartComponent;
