import mongoose, { Schema, model, models } from 'mongoose';

const stockSchema = new mongoose.Schema({
	ticker: String,
	name: String,
	positionSize: Number,
	avgPurchasePrice: Number,
	valueAtPurchase: Number,
	lastPrice: Number,
	marketValue: Number,
	performance: Number,
	// watchlist: Boolean
});

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;
