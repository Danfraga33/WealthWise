import connectDB from '@/components/db';
import mongoose from 'mongoose';

// connectDB(); 
const stockSchema = new mongoose.Schema({
	name: String,
	email: String,
	userId: String,
	stockData: {
		ticker: String,
		stockName: String,
		purchaseDate: String, 
		positionSize: Number,
		avgPurchasePrice: Number,
		valueAtPurchase: Number,
		lastPrice: Number,
		marketValue: Number,
		performance: Number,
	},
});

export default mongoose.models?.Stock || mongoose.model('Stock', stockSchema);
