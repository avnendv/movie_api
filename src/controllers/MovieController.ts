import { NextFunction, Request, Response } from 'express';
import { MessagePayLoad, upSertFormMovie } from '../models';
import { MovieService } from '../services';
import { errorResponse } from '../utils';

export const MovieController = {
  list: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await MovieService.list();
      return res.json(response);
    } catch (error) {
      next(errorResponse(error));
    }
  },
  show: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.id) {
        const response = await MovieService.show(Number(req.params.id));
        return res.json(response);
      }
      throw { msg: 'Parameter id is required!' };
    } catch (error) {
      next(errorResponse(error));
    }
  },
  store: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = upSertFormMovie(req.body);
      if (error) throw { msg: error.details[0].message } as MessagePayLoad;

      const response = await MovieService.store(req.body);
      return res.json(response);
    } catch (error) {
      next(errorResponse(error));
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.id) {
        const { error } = upSertFormMovie(req.body);
        if (error) throw { msg: error.details[0].message } as MessagePayLoad;

        const response = await MovieService.update(+req.params.id, req.body);
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
        const response = await MovieService.destroy(+req.params.id);
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
        const response = await MovieService.restore(+req.params.id);
        return res.json(response);
      }
      throw { msg: 'Parameter id is required!' };
    } catch (error) {
      next(errorResponse(error));
    }
  },
};
