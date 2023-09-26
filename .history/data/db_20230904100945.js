import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	ticker: String,
	name: String,
});

const user = mongoose.model('User', userSchema);

async function dbConnect () { 
   try {
      await mongoose.connect(process.env.MONGODB_URI, {
         useNewUrlParser: true,
      useUnifiedTopology: true})
   }
}


