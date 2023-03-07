import { Observable } from 'rxjs';
import { PokemoModel } from '../models/pokemo-model';
import { InjectionToken } from '@angular/core';
import { PokemonRequest } from '../interfaces/pokemo_request.interface';
import { PokemonDateil } from '../interfaces/pokemon_dateil.interface';

export const POKEMOS_REPOSITORY = new InjectionToken<PokemosRepository>(
  'POKEMOS_REPOSITORY'
);

export interface PokemosRepository {
  getPokemos(cantidad: number): Observable<PokemoModel[]>;
  getPokemo(name: string): Observable<PokemonRequest | any>;
  dateilPokemon(name: string): Observable<PokemonDateil>;
}
