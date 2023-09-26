declare namespace Models {
  interface MovieEpisode {
    id?: number;

    name: string;

    videos: string;

    requireVip?: boolean;

    movie?: Movie;
  }
}
