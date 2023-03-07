import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { PokemoModel } from '../../domain/models/pokemo-model';
import { PokemonRequest } from '../../domain/interfaces/pokemo_request.interface';
import { PokemonDateil } from '../../domain/interfaces/pokemon_dateil.interface';
import {
  POKEMOS_REPOSITORY,
  PokemosRepository,
} from '../../domain/repositories/pokemos-repository';

@Injectable({
  providedIn: 'root',
})
export class PokemosService {
  private _pokemonsDateil: PokemonRequest[] = [];

  constructor(
    @Inject(POKEMOS_REPOSITORY) private pokemoRepository: PokemosRepository
  ) {}

  get pokemonsDateils() {
    return [...this._pokemonsDateil];
  }

  getPokemos(cantidad: number = 10): Observable<PokemoModel[]> {
    return this.pokemoRepository.getPokemos(cantidad);
  }

  getPokemo(name: string): Observable<PokemonRequest | any> {
    return this.pokemoRepository.getPokemo(name);
  }

  async getListDateilPokemonsByName(name: string) {
    this.pokemoRepository
      .getPokemo(name)
      .subscribe((pokemon: PokemonRequest) => {
        if (this._pokemonsDateil.length >= 10) return;
        this._pokemonsDateil = [...this._pokemonsDateil, pokemon];
      });
  }

  pokemonDatail(name: string): Observable<PokemonDateil> {
    return this.pokemoRepository.dateilPokemon(name);
  }
}
