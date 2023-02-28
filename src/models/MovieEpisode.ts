import Joi from 'joi';
import { Movie } from './';

export interface MovieEpisode {
  id?: number;

  name: string;

  videos: string;

  requireVip?: boolean;

  movie?: Movie;
}

export const upSertFormMovieEpisode = (data: MovieEpisode) => {
  const rule = Joi.object({
    name: Joi.string().trim().min(3).max(20).required(),
    videos: Joi.string().trim().required(),
    requireVip: Joi.boolean(),
    movie: Joi.number().integer().required(),
  });

  return rule.validate(data);
};
