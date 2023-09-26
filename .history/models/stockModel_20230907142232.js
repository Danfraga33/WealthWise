import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
	summary: {
		ticker: String,
		name: String,
	},
	positionSize: {
		type: Number,
		required: true,
	},
	avgPurchasePrice: {
		type: Number,
		required: true,
	},
	valueAtPurchase: {
		type: Number,
		required: true,
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
		required: true,
	},
	watchlist: {
		type: Boolean,
	},
});

export default mongoose.models.Stock || mongoose.model('Stock', stockSchema);
