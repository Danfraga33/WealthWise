import connectMongo from '@/utilties/connectMongo';
import Stock from '@/models/stockModel';

export default async function handler(req, res) {
	if (req === 'POST') {
		try {
			connectMongo();
			const { ticker, name } = req.body;
			const task = new Stock({ title, description, completed: false });
			const result = await Stock.save();
			res.status(201).json(task);
		} catch (error) {
			res.status(500).json({ error: 'Error adding task' });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
