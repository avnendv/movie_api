import Joi from 'joi';

export const upSertFormCategory = (data: Models.Category) => {
  const rule = Joi.object({
    name: Joi.string().trim().min(3).max(50).required(),
    parent_id: Joi.number().integer().allow(null, ''),
  });

  return rule.validate(data);
};
