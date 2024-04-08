import { body } from 'express-validator';

export const newTaskValidate = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('assignee').notEmpty().withMessage('Assignee is required'),
]
