import mongoose from 'mongoose';

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
	performance: {
		type: mongoose.Decimal128, // Use Decimal128 for Decimal
		get: (v) => (v ? v.toString() : null), // Convert Decimal128 to string for easy retrieval
	},
});

// export default stockSchema;
// console.log(mongoose.models);

export default mongoose.models?.Stock || mongoose.model('Stock', stockSchema);
