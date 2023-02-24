export interface BaseResponseIF {
  msg?: string;
  isLogger?: boolean;
  result: number;
}

export interface ErrorResponseIF extends BaseResponseIF {}

export const errorResponseData: ErrorResponseIF = {
  result: 0,
  isLogger: true,
  msg: 'Server error!',
};
export interface SuccessResponseIF<T> extends BaseResponseIF {
  data: T | T[];
}
