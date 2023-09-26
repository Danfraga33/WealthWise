import connectDB from '@/components/db';
import Stock from '@/models/stockModel';

connectDB();

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const {
				ticker,
				name,
				positionSize,
				avgPurchasePrice,
				valueAtPurchase,
				lastPrice,
				marketValue,
				performance,
			} = req.body;
			const stock = new Stock({ ticker, name });
			await stock.save();
			res.status(201).json(stock);
		} catch (error) {
			res
				.status(500)
				.json({ error: 'Error adding task', messaeg: error.message });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
