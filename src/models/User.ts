import Joi from 'joi';
import { MovieEpisode, MovieToUsers } from './';

export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum UserStatus {
  NORMAL = 'normal',
  VIP = 'vip',
}

export interface User {
  id?: number;
  user_name: string;
  password: string;
  full_name: string;
  email: string;
  phone?: string;
  gender?: UserGender;
  birthday?: string;
  address?: string;
  status?: UserStatus;
  expired_status?: string;
  movieEpisodes?: MovieEpisode[];
  movieToUsers?: MovieToUsers[];
}

export interface LoginPayload {
  email: string;
  password: string;
}

const obj = {
  email: Joi.string().trim().min(6).max(50).required().email(),
  password: Joi.string().trim().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
};

export const registerForm = (data: User) => {
  const rule = Joi.object({
    ...obj,
    user_name: Joi.string().trim().min(3).max(20).required(),
    full_name: Joi.string().trim().max(225).required(),
    birthday: Joi.date().allow(null, ''),
    gender: Joi.string().trim().allow(null, ''),
    phone: Joi.string().trim().max(12).allow(null, ''),
    address: Joi.string().trim().allow(null, ''),
  });

  return rule.validate(data);
};

export const loginForm = (data: LoginPayload) => {
  const rule = Joi.object(obj);

  return rule.validate(data);
};
