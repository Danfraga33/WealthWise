import { Card, List, ListItem, Title } from '@tremor/react';
import { Button } from '@tremor/react';
import { RefreshIcon } from '@heroicons/react/outline';

const randomProductData = [
	{
		id: 1,
		Product: 'Smart Fitness Tracker',
		Sales: 4577,
	},
	{
		id: 2,
		Product: 'Wireless Noise-Canceling Headphones',
		Sales: 4167,
	},
	{
		id: 3,
		Product: 'Bamboo Charcoal Air Purifiers',
		Sales: 2102,
	},
	{ id: 4, Product: 'Handcrafted Leather Wallets', Sales: 912 },
	{ id: 5, Product: 'Organic Matcha Green Tea', Sales: 300 },
	{ id: 6, Product: 'Smart Water Bottle with Hydration Tracker', Sales: 289 },
	{ id: 7, Product: 'Meditation and Sleep Aid Device', Sales: 211 },
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
