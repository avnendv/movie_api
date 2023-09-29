import { FindManyOptions } from 'typeorm';
import { SuccessResponseIF, MessagePayLoad } from '@/models';
import { slugify } from '@/utils';
import { RESULT_OK } from '@/config/constants';
import { dataSource } from '@/config/DataSource';
import { Category } from '@/entity';

const categoryRepository = dataSource.getRepository(Category);

export const CategoryService = {
  list: async (query?: FindManyOptions<Category>) => {
    try {
      const categories = await categoryRepository.find({
        select: ['id', 'name', 'slug', 'parent_id'],
        order: {
          updated_at: 'DESC',
        },
        ...query,
      });
      const response: SuccessResponseIF<Models.Category> = {
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
      const category = await categoryRepository.findOneByOrFail({
        id,
      });
      const response: SuccessResponseIF<Models.Category> = {
        result: RESULT_OK,
        data: category,
      };
      return response;
    } catch (error) {
      throw {
        msg: 'Category not found!',
      } as MessagePayLoad;
    }
  },
  store: async (data: Models.Category) => {
    try {
      if (data.parent_id) {
        await categoryRepository.findOneByOrFail({
          id: data.parent_id,
        });
      }
      const category = await categoryRepository.save({
        name: data.name,
        slug: slugify(data.name),
        parent_id: data.parent_id || 0,
      });
      return {
        result: RESULT_OK,
        data: category,
      } as SuccessResponseIF<Models.Category>;
    } catch (error) {
      throw {
        msg: 'An input field already exists!',
      } as MessagePayLoad;
    }
  },
  update: async (id: number, data: Models.Category) => {
    try {
      if (id === data.parent_id) {
        throw 'error';
      }
      const category = await categoryRepository.update(
        {
          id,
        },
        {
          name: data.name,
          slug: slugify(data.name),
          parent_id: data.parent_id || 0,
        }
      );
      return category;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
  destroy: async (id: number) => {
    try {
      const category = await categoryRepository.softDelete({ id });
      return category;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
  restore: async (id: number) => {
    try {
      const category = await categoryRepository.restore({ id });
      return category;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
};
