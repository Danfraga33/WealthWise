import { Card, List, ListItem, Title } from '@tremor/react';
import { Button } from '@tremor/react';
import { RefreshIcon } from '@heroicons/react/outline';

const randomProductData = [
	{
		id: 1,
		Product: 'Smart Fitness Tracker',
		Sales: 2500,
	},
	{
		id: 2,
		Product: 'Wireless Noise-Canceling Headphones',
		Sales: 2200,
	},
	{
		id: 3,
		Product: 'Bamboo Charcoal Air Purifiers',
		Sales: 1800,
	},
	{ id: 4, Product: 'Handcrafted Leather Wallets', Sales: 900 },
	{ id: 5, Product: 'Organic Matcha Green Tea', Sales: 300 },
];

const Products = () => (
	<Card>
		<div className="flex justify-between mb-2">
			<Title>Weekly Product Sales</Title>
			<Button icon={RefreshIcon} className="">
				Refresh data
			</Button>
		</div>
		<List>
			{randomProductData.map((item) => (
				<ListItem key={item.id}>
					<span>{item.Product}</span>
					<span>{item.Sales}</span>
				</ListItem>
			))}
		</List>
	</Card>
);

export default Products;
