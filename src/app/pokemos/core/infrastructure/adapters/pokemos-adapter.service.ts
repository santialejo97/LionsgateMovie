import { Injectable } from '@angular/core';
import { PokemosRepository } from '../../domain/repositories/pokemos-repository';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { PokemosResponse } from '../../domain/interfaces/pokemos_response.interface';
import { HttpClient } from '@angular/common/http';
import { PokemoModel } from '../../domain/models/pokemo-model';
import { PokemonRequest } from '../../domain/interfaces/pokemo_request.interface';
import { PokemonDateil } from '../../domain/interfaces/pokemon_dateil.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemosAdapterService implements PokemosRepository {
  private url: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemos(cantidad: number): Observable<PokemoModel[]> {
    return this.http
      .get<PokemosResponse>(`${this.url}/pokemon?limit=${cantidad}`)
      .pipe(
        map(({ results }) => {
          return results;
        })
      );
  }

  dateilPokemon(name: string): Observable<PokemonDateil> {
    return this.http.get<PokemonDateil>(`${this.url}/pokemon-species/${name}`);
  }

  getPokemo(name: string): Observable<PokemonRequest | any> {
    return this.http.get<PokemonRequest>(`${this.url}/pokemon/${name}`);
  }
}
