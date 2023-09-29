import connectDB from '@/components/db';
import mongoose from 'mongoose';

// connectDB();
const stockSchema = new mongoose.Schema({
	summary: {
		ticker: String,
		name: String,
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
