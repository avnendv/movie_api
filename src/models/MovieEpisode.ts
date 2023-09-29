import Joi from 'joi';

export const upSertFormMovieEpisode = (data: Models.MovieEpisode) => {
  const rule = Joi.object({
    name: Joi.string().trim().min(3).max(20).required(),
    videos: Joi.string().trim().required(),
    requireVip: Joi.boolean(),
    movie: Joi.number().integer().required(),
  });

  return rule.validate(data);
};
