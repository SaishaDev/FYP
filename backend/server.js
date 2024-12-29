import dotenv from 'dotenv';
import db from './config/db.js'; 
import { app } from './app.js';
dotenv.config({
  path: './.env',
});

import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';

db();

// Routes
app.use('/api/auth', authRoutes); 
app.use('/api/admin', adminRoutes); 

// Starting the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
