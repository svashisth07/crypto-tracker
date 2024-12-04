import express from 'express';
import { getCoinsMarkets } from '../controllers/coins-controller';
import cacheMiddleware from '../middlewares/cache-middleware';

const router = express.Router();

router.get('/markets', cacheMiddleware, getCoinsMarkets);

export default router;