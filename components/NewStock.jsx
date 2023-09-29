import mongoose from 'mongoose';
import Form from '@/components/OldForm';
import Head from 'next/head';
import connectDB from './db';

async function createStock(enteredStockData) {
	try {
		// connectDB();
		console.log('Connected Sucessefully');

		// res.status(201).json({ message: 'Data inserted successfully' });
	} catch (error) {
		console.error(`Error inserting data:`, error);

		// res.status(500).json({ message: 'Internal Server Error' });
	}
	// finally {
	// 	mongoose.connection.close();
	// }
}
