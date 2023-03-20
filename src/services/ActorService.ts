import { SuccessResponseIF, Actor as ActorModel, MessagePayLoad } from '@/models';
import { FindManyOptions } from 'typeorm';
import { slugify } from '@/utils';
import { RESULT_OK } from '@/config/constants';
import { dataSource } from '@/config/DataSource';
import { Actor } from '@/entity';

const actorRepository = dataSource.getRepository(Actor);

export const ActorService = {
  list: async (query?: FindManyOptions<Actor>) => {
    try {
      const categories = await actorRepository.find({
        order: {
          updated_at: 'DESC',
        },
        ...query,
      });
      const response: SuccessResponseIF<ActorModel> = {
        result: RESULT_OK,
        data: categories,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },
  show: async (id: number) => {
    try {
      const actor = await actorRepository.findOneByOrFail({
        id,
      });
      const response: SuccessResponseIF<ActorModel> = {
        result: RESULT_OK,
        data: actor,
      };
      return response;
    } catch (error) {
      throw {
        msg: 'Actor not found!',
      } as MessagePayLoad;
    }
  },
  store: async (data: ActorModel) => {
    try {
      const actor = await actorRepository.save({
        name: data.name,
        slug: slugify(data.name),
      });
      return {
        result: RESULT_OK,
        data: actor,
      } as SuccessResponseIF<ActorModel>;
    } catch (error) {
      throw {
        msg: 'An input field already exists!',
      } as MessagePayLoad;
    }
  },
  update: async (id: number, data: ActorModel) => {
    try {
      const actor = await actorRepository.update(
        {
          id,
        },
        {
          name: data.name,
          slug: slugify(data.name),
        }
      );
      return actor;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
  destroy: async (id: number) => {
    try {
      const actor = await actorRepository.softDelete({ id });
      return actor;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
  restore: async (id: number) => {
    try {
      const actor = await actorRepository.restore({ id });
      return actor;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
};
