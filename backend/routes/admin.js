// routes/admin.js
import express from 'express';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Example of an admin-only route
router.get('/admin-dashboard', protect, authorize('admin'), (req, res) => {
  res.status(200).json({ message: 'Welcome to the admin dashboard' });
});

export default router;
