export interface Character {
  id: string;
  name: string;
  gender: string;
  image: string;
  episode?: { name: string; episode: string }[];
  characters?: { name: string }[];
}
