import mongoose from 'mongoose';
import { Models } from 'mongoose';

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
console.log(mongoose.Models);

export default mongoose.Models?.Stock || mongoose.model('Stock', stockSchema);
