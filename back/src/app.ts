import express from 'express';
import taskRoutes from './routes/task.routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);
export default app;