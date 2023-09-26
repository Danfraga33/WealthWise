import connectMongo from '@/utilties/connectMongo';
import Stock from '@/models/stockModel';

export default async function handler(req, res) {
	if (req === 'POST') {
		try {
		} catch (error) {
			res.status(500).json({ error: 'Error adding task' });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
