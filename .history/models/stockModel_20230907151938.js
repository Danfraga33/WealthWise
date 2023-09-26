import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
	summary: {
		ticker: String,
		name: String,
	},
	positionSize: {
		type: Number,
	},
	avgPurchasePrice: {
		type: Number,
	},
	valueAtPurchase: {
		type: Number,
	},
	lastPrice: {
		type: Number,
	},
	marketValue: {
		type: Number,
	},
});

export default mongoose.models.Stock || mongoose.model('Stock', stockSchema);
