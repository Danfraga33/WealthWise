import connectDB from '@/components/db';
import Stock from '@/models/stockModel';

connectDB();

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			console.log('Connected to MongoDB');
			const { ticker, name } = req.body;

			await Stock.save();
		} catch (error) {}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
