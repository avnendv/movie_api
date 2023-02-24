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
