import Joi from 'joi';

export const upSertFormMovie = (data: Models.Movie) => {
  const rule = Joi.object({
    name: Joi.string().trim().min(3).required(),
    name_en: Joi.string().trim().allow(null, ''),
    country: Joi.string().trim().required(),
    descriptions: Joi.string().trim().allow(null, ''),
    actors: Joi.array()
      .items(Joi.object({ id: Joi.number().integer().required() }))
      .required(),
    categories: Joi.array()
      .items(Joi.object({ id: Joi.number().integer().required() }))
      .required(),
  });

  return rule.validate(data);
};
