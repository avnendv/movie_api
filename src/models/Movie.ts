import Joi from 'joi';
import { Actor, Category, MovieEpisode, MovieToDateView, MovieToUsers } from './';

export interface Movie {
  id?: number;

  name: string;

  slug: string;

  name_en?: string;

  country: string;

  descriptions?: string;

  movieEpisodes?: MovieEpisode[];

  categories?: Category[];

  actors?: Actor[];

  movieToDateViews?: MovieToDateView[];

  movieToUsers?: MovieToUsers[];
}


export const upSertFormMovie = (data: Movie) => {
  const rule = Joi.object({
    name: Joi.string().trim().min(3).required(),
    name_en: Joi.string().trim().allow(null, ''),
    country: Joi.string().trim().required(),
    descriptions: Joi.string().trim().allow(null, ''),
    actors: Joi.array().items(Joi.object({id: Joi.number().integer().required()})).required(),
    categories: Joi.array().items(Joi.object({id: Joi.number().integer().required()})).required(),
  });

  return rule.validate(data);
};