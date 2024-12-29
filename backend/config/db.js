import dotenv from 'dotenv';
import mongoose from 'mongoose'; 

dotenv.config();

const connectDB = async () => {
  try {

    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/griha-sewa';

    await mongoose.connect(uri);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

export default connectDB; 
