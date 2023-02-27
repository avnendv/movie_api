import { Actor, Category, MovieEpisode, MovieToDateView, MovieToUsers } from './';

export interface Movie {
  id?: number;

  name: string;

  slug: string;

  name_en?: string;

  country: string;

  descriptions?: string;

  movieEpisodes?: MovieEpisode[];

  categories?: Category[];

  actors?: Actor[];

  movieToDateViews?: MovieToDateView[];

  movieToUsers?: MovieToUsers[];
}
