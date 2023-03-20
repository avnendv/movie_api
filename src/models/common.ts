import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { RESULT_FAIL } from '@/config/constants';

export interface RequestIF extends Request {
  userId?: number;
}

export interface JwtPayloadIF extends JwtPayload {
  id?: number;
}

export interface BaseResponseIF {
  msg?: string;
  isLogger?: boolean;
  result: number;
}

export type ErrorResponseIF = BaseResponseIF

export const errorResponseData: ErrorResponseIF = {
  result: RESULT_FAIL,
  isLogger: true,
  msg: 'Server error!',
};
export interface SuccessResponseIF<T> extends BaseResponseIF {
  data: T | T[];
}

export interface MessagePayLoad {
  msg: string;
}
