import connectDB from '@/components/db';
import Stock from '@/models/stockModel';
import { connect } from 'mongoose';

connect();

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const stocks = await Stock.save();
			res.status(200).json(stocks);
		} catch (error) {
			res.status(500).json({ error: 'Error adding task' });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
