import connectMongo from '@/utilties/connectMongo';
import Stock from '@/models/stockModel';
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} req
 */
connectMongo();

export default async function handler(req, res) {
	if (req === 'POST') {
		try {
			connectMongo();
			const { ticker, name } = req.body;
			const task = new Stock({ title, description, completed: false });
			await Stock.save();
			res.status(201).json(task);
		} catch (error) {
			res.status(500).json({ error: 'Error adding task' });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
