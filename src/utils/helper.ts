import { errorResponseData } from '../models';

export const errorResponse = (error: unknown) => {
  return { ...errorResponseData, ...(error as Object) };
};
