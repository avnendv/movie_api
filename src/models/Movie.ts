import { Actor, Category, MovieEpisode, MovieToDateView } from './';

export interface Movie {
  id?: number;

  name: string;

  slug: string;

  name_en?: string;

  descriptions?: string;

  movieEpisodes?: MovieEpisode[];

  categories?: Category[];

  actors?: Actor[];

  movieToDateViews?: MovieToDateView[];
}
