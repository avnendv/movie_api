import { Movie, User } from './';

export interface MovieToUsers {
  id?: number;

  rate?: number;

  movie?: Movie;

  user?: User;
}
