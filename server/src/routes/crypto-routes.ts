import express from 'express';
import { getCryptocurrencies } from '../controllers/crypto-controller';
import cacheMiddleware from '../middlewares/cache-middleware';

const router = express.Router();

router.get('/cryptocurrencies', cacheMiddleware, getCryptocurrencies);

export default router;