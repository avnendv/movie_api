declare namespace Models {
  interface Actor {
    id?: number;
    name: string;
    slug: string;
    gender?: Enum.UserGender;
    birthday?: string;
    address?: string;
    descriptions?: string;
    viewer: number;
    movies?: Movie[];
  }
}
