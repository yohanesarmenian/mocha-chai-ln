// app.js
import express from 'express';
import registerRoutes from './routes/registerRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import usersRoutes from './routes/usersRoutes.js';

const app = express();
app.use(express.json()); // Middleware untuk parsing JSON
app.use('/api', registerRoutes); // Menggunakan rute pendaftaran
app.use('/api', loginRoutes); // Menggunakan rute login
app.use('/api', usersRoutes); // Menggunakan rute pengguna

export default app;