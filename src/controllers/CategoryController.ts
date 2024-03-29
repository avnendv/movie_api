import { NextFunction, Request, Response } from 'express';
import { MessagePayLoad, upSertFormCategory } from '@/models';
import { CategoryService } from '@/services';
import { errorResponse } from '@/utils';

export const CategoryController = {
  list: async (_req: Request, res: Response, next: NextFunction) => {
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
      throw { msg: 'Parameter id is required!' };
    } catch (error) {
      next(errorResponse(error));
    }
  },
  store: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = upSertFormCategory(req.body);
      if (error) throw { msg: error.details[0].message } as MessagePayLoad;

      const response = await CategoryService.store(req.body);
      return res.json(response);
    } catch (error) {
      next(errorResponse(error));
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.id) {
        const { error } = upSertFormCategory(req.body);
        if (error) throw { msg: error.details[0].message } as MessagePayLoad;

        const response = await CategoryService.update(+req.params.id, req.body);
        return res.json(response);
      }
      throw { msg: 'Parameter id is required!' };
    } catch (error) {
      next(errorResponse(error));
    }
  },
  destroy: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.id) {
        const response = await CategoryService.destroy(+req.params.id);
        return res.json(response);
      }
      throw { msg: 'Parameter id is required!' };
    } catch (error) {
      next(errorResponse(error));
    }
  },
  restore: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.id) {
        const response = await CategoryService.restore(+req.params.id);
        return res.json(response);
      }
      throw { msg: 'Parameter id is required!' };
    } catch (error) {
      next(errorResponse(error));
    }
  },
};
