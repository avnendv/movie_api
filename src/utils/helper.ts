import { errorResponseData } from '../models';

export const errorResponse = (error: unknown) => {
  return { ...(error as Object), ...errorResponseData };
};
