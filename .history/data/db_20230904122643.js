import mongoose from 'mongoose';

//Make schema
const userSchema = new mongoose.Schema({
	ticker: String,
	name: String,
});
// Make User Model, using the userSchema.
const User = mongoose.model('User', userSchema);

async function addStock(enteredStockData) {}
