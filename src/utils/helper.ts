import { generate } from 'shortid';
import { errorResponseData } from '@/models';

export const errorResponse = (error: unknown) => {
  return { ...errorResponseData, ...(error as Record<string, string>) };
};

/** slug generator */
export const slugify = (str: string, prefix = '-') =>
  String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[đ]/g, 'd') // change đ to d
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, prefix) // replace spaces with hyphens
    .replace(/-+/g, prefix); // remove consecutive hyphens +
`-${generate()}`;
