export interface BaseResponseIF {
  msg?: string;
  isLogger?: boolean;
  status: number;
}

export interface ErrorResponseIF extends BaseResponseIF {}

export interface SuccessResponseIF<T> extends BaseResponseIF {
  data: T | T[];
}
