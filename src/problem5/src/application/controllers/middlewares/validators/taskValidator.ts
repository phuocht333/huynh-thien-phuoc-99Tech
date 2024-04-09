import express from 'express';
import { ContextRunner, body, query, validationResult } from 'express-validator';
import { statusList } from '../../../entities/Task';

export const validate = (validations: ContextRunner[]) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    for (let validation of validations) {
      const result: any = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

export const validateCreateTask = validate([
  body('description').notEmpty().withMessage('Description is required'),
  body('assignee').notEmpty().withMessage('Assignee is required'),
]);

export const validateGetTasks = validate([
  query('status').isIn([...statusList, '']).withMessage('Status is invalid'),
])
