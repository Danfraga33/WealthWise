import { Card, List, ListItem, Title } from '@tremor/react';
import { Button } from '@tremor/react';
import { RefreshIcon } from '@heroicons/react/outline';

const randomProductData = [
	{
		Product: 'Smart Fitness Tracker',
		Sales: 2500,
	},
	{
		Product: 'Wireless Noise-Canceling Headphones',
		Sales: 2200,
	},
	{
		Product: 'Bamboo Charcoal Air Purifiers',
		Sales: 1800,
	},
	{
		Product: 'Handcrafted Leather Wallets',
		Sales: 900,
	},
	{
		Product: 'Organic Matcha Green Tea',
		Sales: 300,
	},
];

const Products = () => (
	<Card>
		<Title>Weekly Product Sales</Title>
		<button></button>
		<List>
			{randomProductData.map((item) => (
				<ListItem key={item.city}>
					<span>{item.Product}</span>
					<span>{item.Sales}</span>
				</ListItem>
			))}
		</List>
	</Card>
);

export default Products;
