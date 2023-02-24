import { Movie, User } from './';

export interface MovieEpisode {
  id?: number;

  name: string;

  videos: string;

  requireVip: string;

  movie?: Movie;

  user?: User;
}
