import { NextFunction, Request, Response } from 'express';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes

export const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const cacheKey = req.originalUrl;
  const cachedData = cache.get(cacheKey) as any[];

  if (cachedData) {
    console.log('Serving from cache');
    res.write('[');
    cachedData?.forEach((crypto: any, index: number) => {
      res.write(JSON.stringify(crypto) + (index < cachedData.length - 1 ? ',' : ''));
    });
    res.write(']');
    res.end();
  } else {
    // Attach cacheKey to the request object for use in the controller
    (req as any).cacheKey = cacheKey;
    next();
  }
};

export const setCache = (key: string, data: any) => {
  cache.set(key, data);
};

export default cacheMiddleware;