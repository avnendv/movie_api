import { NextFunction, Request, Response } from 'express';
import { MessagePayLoad, upSertFormMovieEpisode } from '../models';
import { MovieEpisodeService } from '../services';
import { errorResponse } from '../utils';

export const MovieEpisodeController = {
  list: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await MovieEpisodeService.list();
      return res.json(response);
    } catch (error) {
      next(errorResponse(error));
    }
  },
  show: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.id) {
        const response = await MovieEpisodeService.show(Number(req.params.id));
        return res.json(response);
      }
      throw { msg: 'Parameter id is required!' };
    } catch (error) {
      next(errorResponse(error));
    }
  },
  store: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = upSertFormMovieEpisode(req.body);
      if (error) throw { msg: error.details[0].message } as MessagePayLoad;

      const response = await MovieEpisodeService.store(req.body);
      return res.json(response);
    } catch (error) {
      next(errorResponse(error));
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.id) {
        const { error } = upSertFormMovieEpisode(req.body);
        if (error) throw { msg: error.details[0].message } as MessagePayLoad;

        const response = await MovieEpisodeService.update(+req.params.id, req.body);
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
        const response = await MovieEpisodeService.destroy(+req.params.id);
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
        const response = await MovieEpisodeService.restore(+req.params.id);
        return res.json(response);
      }
      throw { msg: 'Parameter id is required!' };
    } catch (error) {
      next(errorResponse(error));
    }
  },
};
