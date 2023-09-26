import Joi from 'joi';

export const upSertFormActor = (data: Models.Actor) => {
  const rule = Joi.object({
    name: Joi.string().trim().min(3).max(50).required(),
    gender: Joi.string().trim().allow(null, ''),
    birthday: Joi.date().allow(null, ''),
    address: Joi.string().trim().allow(null, ''),
    descriptions: Joi.string().trim().allow(null, ''),
  });

  return rule.validate(data);
};
