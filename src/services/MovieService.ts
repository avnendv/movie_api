import { SuccessResponseIF, Movie as MovieModel, MessagePayLoad } from '../models';
import { FindManyOptions, In } from 'typeorm';
import { slugify } from '../utils';
import { RESULT_OK } from '../config/constants';
import { dataSource } from '../config/DataSource';
import { Actor, Category, Movie } from '../entity';

const actorRepository = dataSource.getRepository(Actor);
const categoryRepository = dataSource.getRepository(Category);
const movieRepository = dataSource.getRepository(Movie);

export const MovieService = {
  list: async (query?: FindManyOptions<Movie>) => {
    try {
      const movies = await movieRepository.find({
        select: ['id', 'name', 'slug', 'name_en', 'country', 'descriptions'],
        order: {
          updated_at: 'DESC',
        },
        ...query,
      });
      const response: SuccessResponseIF<MovieModel> = {
        result: RESULT_OK,
        data: movies,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },
  show: async (id: number) => {
    try {
      const movie = await movieRepository.findOneByOrFail({
        id,
      });
      const response: SuccessResponseIF<MovieModel> = {
        result: RESULT_OK,
        data: movie,
      };
      return response;
    } catch (error) {
      throw {
        msg: 'Movie not found!',
      } as MessagePayLoad;
    }
  },
  store: async (data: MovieModel) => {
    try {
      const actors = await actorRepository.find({
        where: {
          id: In(data.actors?.map((item) => item.id) as []),
        },
      });
      const categories = await categoryRepository.find({
        where: {
          id: In(data.categories?.map((item) => item.id) as []),
        },
      });
      if (!actors.length || !categories.length) {
        throw 'error';
      }
      const movie = await movieRepository.save({
        name: data.name,
        slug: slugify(data.name),
        country: data.country,
        actors: actors,
        categories: categories,
      });
      return {
        result: RESULT_OK,
        data: movie,
      } as SuccessResponseIF<MovieModel>;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
  update: async (id: number, data: MovieModel) => {
    try {
      const actors = await actorRepository.find({
        
        where: {
          id: In(data.actors?.map((item) => item.id) as []),
        },
      });
      const categories = await categoryRepository.find({
        where: {
          id: In(data.categories?.map((item) => item.id) as []),
        },
      });
      if (!actors.length || !categories.length) {
        throw 'error';
      }
      const movie = await movieRepository.findOne({
        where: { id: id },
        relations: ['actors', 'categories'],
      });
      if (!movie) {
        throw 'error';
      }
      movie.actors = actors;
      movie.categories = categories;
      await movie.save();
      return movie;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
  destroy: async (id: number) => {
    try {
      const movie = await movieRepository.softDelete({ id });
      return movie;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
  restore: async (id: number) => {
    try {
      const movie = await movieRepository.restore({ id });
      return movie;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
};
