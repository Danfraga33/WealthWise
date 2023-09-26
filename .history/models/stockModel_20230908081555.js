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
	performance: Number,
});

// export default stockSchema;
// console.log(mongoose.models);

export default mongoose.models?.Stock || mongoose.model('Stock', stockSchema);
