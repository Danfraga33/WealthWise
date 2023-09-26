import mongoose, { model } from 'mongoose';

const stockSchema = new mongoose.Schema({
	ticker: String,
	name: String,
	positionSize: Number,
	avgPurchasePrice: Number,
	valueAtPurchase: Number,
	lastPrice: Number,
	marketValue: Number,
	performance: Number,
});

export default mongoose.models.Stock || model('Stock', stockSchema);
