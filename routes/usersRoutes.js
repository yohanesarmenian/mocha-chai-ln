// routes/usersRoutes.js
import express from 'express';
import { getUsers, getOneUser } from '../controllers/usersController.js';

const router = express.Router();

router.get('/users', async (req, res) => {
    const response = await getUsers();
    res.status(response.status).json(response.body);
});

router.get('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const response = await  getOneUser(userId);
    res.status(response.status).json(response.body);
});

export default router;