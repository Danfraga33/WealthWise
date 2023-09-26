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
});

// export default stockSchema;
console.log(mongoose.models);

const Stock = mongoose.models.Stock;

export default Stock;
// export default mongoose.models?.Stock || mongoose.model('Stock', stockSchema);;
