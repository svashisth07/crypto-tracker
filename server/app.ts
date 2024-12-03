import express from 'express';
import cryptoRoutes from './routes/cryptoRoutes';
import { port } from './config';

const app = express();

app.use('/api', cryptoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});