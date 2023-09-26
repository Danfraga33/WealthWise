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
		required: true,
	},
	marketValue: {
		type: Number,
	},
	performance: {
		type: Number,
	},
	watchlist: {
		type: Boolean,
	},
});

export default mongoose.models.Stock || mongoose.model('Stock', stockSchema);
