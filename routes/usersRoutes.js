// routes/usersRoutes.js
import express from 'express';
import { getUsers } from '../controllers/usersController.js';

const router = express.Router();

router.get('/users', async (req, res) => {
    const response = await getUsers();
    res.status(response.status).json(response.body);
});

export default router;