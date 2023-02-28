import Joi from 'joi';
import { Movie } from './';

export interface Category {
  id?: number;
  name: string;
  slug: string;
  parent_id?: number;
  movies?: Movie[];
}

export const upSertFormCategory = (data: Category) => {
  const rule = Joi.object({
    name: Joi.string().trim().min(3).max(50).required(),
    parent_id: Joi.number().integer().allow(null, ''),
  });

  return rule.validate(data);
};
