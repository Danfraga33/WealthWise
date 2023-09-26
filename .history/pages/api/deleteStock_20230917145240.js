import connectDB from '@/components/db.js';
import Stock from '@/models/stockModel';

connectDB();

export default async function handler(req, res)