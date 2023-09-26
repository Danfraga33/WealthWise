import mongoose, { Schema, model, models } from 'mongoose';

const stockSchema = new mongoose.Schema({
	ticker: enteredTicker,
	name: enteredName,
	positionSize: enteredPositionSize,
	avgPurchasePrice: enteredavgPurchasePrice,
	valueAtPurchase: enteredvalueAtPurchase,
	lastPrice: enteredLastPrice,
	marketValue: enteredMarketValue,
	performance: performance,
});

const Stock = models.test || mongoose.model('Stock', stockSchema);

export default Stock;
