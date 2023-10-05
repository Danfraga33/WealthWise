import connectDB from '@/components/db';
import mongoose from 'mongoose';

// connectDB();
const stockSchema = new mongoose.Schema({
	name: String,
	email: String,
	id: String,
	summary: {
		ticker: String,
		stockName: String,
	},
	positionSize: Number,
	avgPurchasePrice: Number,
	valueAtPurchase: Number,
	lastPrice: Number,
	marketValue: Number,
	performance: Number,
	purchaseDate: String,
});

export default mongoose.models?.Stock || mongoose.model('Stock', stockSchema);
