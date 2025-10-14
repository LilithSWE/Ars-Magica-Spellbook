export type Spell = {
  id: number;
  name: string;
  focus: string | null;
  technique: string;
  form: string;
  level: number | null;
  range: string;
  duration: string;
  target: string;
  effect: string;
  created_at: string;
  user: { id: number } | null;
  favoriteOf: { id: number } | null;
};
