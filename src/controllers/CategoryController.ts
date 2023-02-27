import { NextFunction, Request, Response } from 'express';
import { MessagePayLoad } from 'models';
import { CategoryService } from '../services';
import { errorResponse } from '../utils';

export const CategoryController = {
  list: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await CategoryService.list();
      return res.json(response);
    } catch (error) {
      next(errorResponse(error));
    }
  },
  show: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.id) {
        const response = await CategoryService.show(Number(req.params.id));
        return res.json(response);
      }
    } catch (error) {
      next(errorResponse(error));
    }
  },
  store: async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(errorResponse(error));
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(errorResponse(error));
    }
  },
  destroy: async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(errorResponse(error));
    }
  },
};
