import mongoose, { model, models } from 'mongoose';

const stockSchema = new mongoose.Schema({
	id: Number,
	summary: {
		ticker: String,
		name: String,
	},
	positionSize: Number,
	avgPurchasePrice: Number,
	valueAtPurchase: Number,
	dateOfPurchase: Date,
	lastPrice: Number,
	currentMarketValue: Number,
	performance: Number,
	// purchased: Boolean,
});

export default mongoose.models.Stock || model('Stock', stockSchema);
