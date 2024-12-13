
import { check, validationResult } from 'express-validator';

enum Currency {
    USD = 'usd',
    EUR = 'eur',
    GBP = 'gbp',
    CHF = 'chf',
    INR = 'inr',
}

export const validateMarketRequest = [
  check('currency')
    .isString()
    .withMessage('Currency must be a string')
    .isIn(Object.values(Currency))
    .withMessage(`Currency must be one of the following: ${Object.values(Currency).join(', ')}`),
  check('per_page').isInt({ min: 1 }).withMessage('per_page must be a positive integer'),
  check('page').isInt({ min: 1 }).withMessage('page must be a positive integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];