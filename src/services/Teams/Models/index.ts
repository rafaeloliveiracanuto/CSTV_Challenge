export interface Team {
  acronym: null;
  current_videogame: {
    id: number;
    name: string;
    slug: string;
  };
  id: number;
  image_url: string | null;
  location: string;
  modified_at: string;
  name: string;
  players: Player[];
  slug: string;
}

export interface Player {
  age: number | null;
  birthday: string | null;
  first_name: string | null;
  id: number;
  image_url: string | null;
  last_name: string | null;
  modified_at: string;
  name: string;
  nationality: string;
  role: string | null;
  slug: string;
}
