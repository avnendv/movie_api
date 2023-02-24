import { DateView, Movie } from './';

export interface MovieToDateView {
  movieToDateViewId?: number;

  viewer: number;

  movie?: Movie;

  dateView?: DateView;
}
