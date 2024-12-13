import express from 'express';
import { getCoinsMarkets } from '../controllers/coins-controller';
import cacheMiddleware from '../middlewares/cache-middleware';
import { validateMarketRequest } from '../middlewares/validate-market-request';

const router = express.Router();

router.get('/markets', validateMarketRequest, cacheMiddleware, getCoinsMarkets);

export default router;
