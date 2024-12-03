import { Request, Response, NextFunction } from 'express';
import NodeCache from 'node-cache';
import config from '../config';

const cache = new NodeCache();

const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const cacheKey = req.originalUrl;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    res.send(cachedData);
    return;
  } else {
    // Override the res.send method to cache the response
    res.sendResponse = res.send;
    res.send = (body) => {
      cache.set(cacheKey, JSON.stringify(body), config.cacheTTL);
      res.sendResponse(body); // Ensure the return type matches
    };
    next();
  }
};

export default cacheMiddleware;