import { NextFunction, Request, Response } from 'express';
import { MessagePayLoad, upSertFormActor } from '@/models';
import { ActorService } from '@/services';
import { errorResponse } from '@/utils';

export const ActorController = {
  list: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await ActorService.list();
      return res.json(response);
    } catch (error) {
      next(errorResponse(error));
    }
  },
  show: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.id) {
        const response = await ActorService.show(Number(req.params.id));
        return res.json(response);
      }
      throw { msg: 'Parameter id is required!' };
    } catch (error) {
      next(errorResponse(error));
    }
  },
  store: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = upSertFormActor(req.body);
      if (error) throw { msg: error.details[0].message } as MessagePayLoad;

      const response = await ActorService.store(req.body);
      return res.json(response);
    } catch (error) {
      next(errorResponse(error));
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params.id) {
        const { error } = upSertFormActor(req.body);
        if (error) throw { msg: error.details[0].message } as MessagePayLoad;

        const response = await ActorService.update(+req.params.id, req.body);
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
        const response = await ActorService.destroy(+req.params.id);
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
        const response = await ActorService.restore(+req.params.id);
        return res.json(response);
      }
      throw { msg: 'Parameter id is required!' };
    } catch (error) {
      next(errorResponse(error));
    }
  },
};
