import { FindManyOptions, FindOperator } from 'typeorm';
import { SuccessResponseIF, MessagePayLoad } from '@/models';
import { RESULT_OK } from '@/config/constants';
import { dataSource } from '@/config/DataSource';
import { Movie, MovieEpisode } from '@/entity';

const movieRepository = dataSource.getRepository(Movie);
const movieEpisodeRepository = dataSource.getRepository(MovieEpisode);

export const MovieEpisodeService = {
  list: async (query?: FindManyOptions<MovieEpisode>) => {
    try {
      const categories = await movieEpisodeRepository.find({
        order: {
          updated_at: 'DESC',
        },
        ...query,
      });
      const response: SuccessResponseIF<Models.MovieEpisode> = {
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
      const movieEpisode = await movieEpisodeRepository.findOneByOrFail({
        id,
      });
      const response: SuccessResponseIF<Models.MovieEpisode> = {
        result: RESULT_OK,
        data: movieEpisode,
      };
      return response;
    } catch (error) {
      throw {
        msg: 'MovieEpisode not found!',
      } as MessagePayLoad;
    }
  },
  store: async (data: Models.MovieEpisode) => {
    try {
      await movieRepository.findOneByOrFail({
        id: data.movie as number | FindOperator<number> | undefined,
      });
      const movieEpisode = await movieEpisodeRepository.save({
        ...data,
      });
      return {
        result: RESULT_OK,
        data: movieEpisode,
      } as SuccessResponseIF<Models.MovieEpisode>;
    } catch (error) {
      throw {
        msg: 'An input field already exists or movie not exists!',
      } as MessagePayLoad;
    }
  },
  update: async (id: number, data: Models.MovieEpisode) => {
    try {
      await movieRepository.findOneByOrFail({
        id: data.movie as number | FindOperator<number> | undefined,
      });
      const movieEpisode = await movieEpisodeRepository.update(
        {
          id,
        },
        data
      );
      return movieEpisode;
    } catch (error) {
      throw {
        msg: 'Has some error or movie not exists!',
      } as MessagePayLoad;
    }
  },
  destroy: async (id: number) => {
    try {
      const MovieEpisode = await movieEpisodeRepository.softDelete({ id });
      return MovieEpisode;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
  restore: async (id: number) => {
    try {
      const MovieEpisode = await movieEpisodeRepository.restore({ id });
      return MovieEpisode;
    } catch (error) {
      throw {
        msg: 'Has some error!',
      } as MessagePayLoad;
    }
  },
};
