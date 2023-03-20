import { generate } from 'shortid';
import { errorResponseData } from '@/models';

export const errorResponse = (error: unknown) => {
  return { ...errorResponseData, ...(error as Object) };
};

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '') +
  '-' +
  generate();
