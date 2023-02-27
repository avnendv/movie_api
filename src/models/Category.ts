import { Movie } from './';

export interface Category {
  id?: number;
  name: string;
  slug: string;
  parent_id?: number;
  movies?: Movie[];
}
