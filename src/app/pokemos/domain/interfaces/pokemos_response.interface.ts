import { PokemoModel } from '../models/pokemo-model';
export interface PokemosResponse {
  count: number;
  next: string;
  previous: null;
  results: PokemoModel[];
}
