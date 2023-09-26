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
			const { ticker, name } = req.body;
			console.log('CONNECTING TO MONGO');
			console.log('CONNECTED TO MONGO');

			console.log('CREATING A DOC');
			const test = await Stock.create(req.body);
			console.log('CREATED A DOC');

			res.json({ test });
		} catch (error) {
			res.status(500).json({ error: 'Error adding task' });
		}
	}
}
