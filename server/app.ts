import express from 'express';
import cors from 'cors';
import config from './src/config';
import CoinsRoutes from './src/routes/coins-routes';
import statusMonitor from 'express-status-monitor';

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Ensure this matches your frontend's URL
  methods: ['GET'],
  credentials: true,
}));

app.use('/api/coins', CoinsRoutes);
app.use(statusMonitor());

const port = config.port;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});