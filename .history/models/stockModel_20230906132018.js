import mongoose, { model } from 'mongoose';

const stockSchema = new mongoose.Schema({
	id: Number,
	summary: {
		ticker: String,
		name: String,
	},
	status: String,
	positionSize: Number,
	avgPurchasePrice: String,
	valueAtPurchase: String,
	dateOfPurchase: Date,
	lastPrice: String,
	currentMarketValue: String,
	performance: String,
});

export default mongoose.models.Stock || model('Stock', stockSchema);
