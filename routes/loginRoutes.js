// routes/loginRoutes.js
import express from 'express';
import { login } from '../controllers/loginController.js'; // Ensure this matches the export

const router = express.Router();

router.post('/login', async (req, res) => {
    const response = await login(req.body);
    res.status(response.status).json(response.body);
});

export default router;