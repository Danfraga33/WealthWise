import mongoose from 'mongoose';
import stock from '@/components/Form';

//Make schema
const stockSchema = new mongoose.Schema({
	ticker: String,
	name: String,
});
// Make User Model, using the userSchema.
const Stock = mongoose.model('Stock', stockSchema);

async function addStock(enteredStockData) {
	try {
	} catch (error) {
		console.error(error);
	}
}
