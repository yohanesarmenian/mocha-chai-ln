// routes/registerRoutes.js
import express from 'express';
import { register } from '../controllers/registerController.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const response = await register(req.body);
    res.status(response.status).json(response.body);
});

export default router;