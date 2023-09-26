import connectDB from '@/components/db';
import Stock from '@/models/stockModel';

connectDB();

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			console.log('Connected to MongoDB');
			const { ticker, name } = req.body;

			const stock = new Stock({
				ticker,
				name,
			});

			await req.body.save();
			res.status(201).json(stock);
		} catch (error) {
			res
				.status(500)
				.json({ error: 'Error adding task', message: error.message });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
