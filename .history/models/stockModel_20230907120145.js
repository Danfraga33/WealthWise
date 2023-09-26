import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
	summary: {
		ticker: String,
		name: String,
	},
	positionSize: {
		type: Number,
		required: true,
		integer: true,
	},
	avgPurchasePrice: {
		type: Number,
		required: true,
		integer: true,
	},
	valueAtPurchase: {
		type: Number,
		required: true,
		integer: true,
	},
	lastPrice: {
		type: Number,
		required: true,
		integer: true,
	},
	marketValue: {
		type: Number,
		required: true,
		integer: true,
	},
	performance: {
		type: Number,
		required: true,
		integer: true,
	},
	watchlist: {
		type: Boolean,
	},
});

export default mongoose.models.Stock || mongoose.model('Stock', stockSchema);
