import Joi from 'joi';
import { Movie, UserGender } from './';

export interface Actor {
  id?: number;
  name: string;
  slug: string;
  gender?: UserGender;
  birthday?: string;
  address?: string;
  descriptions?: string;
  viewer: number;
  movies?: Movie[];
}

export const upSertFormActor= (data: Actor) => {
  const rule = Joi.object({
    name: Joi.string().trim().min(3).max(50).required(),
    gender: Joi.string().trim().allow(null, ''),
    birthday: Joi.date().allow(null, ''),
    address: Joi.string().trim().allow(null, ''),
    descriptions: Joi.string().trim().allow(null, ''),
  });

  return rule.validate(data);
};
