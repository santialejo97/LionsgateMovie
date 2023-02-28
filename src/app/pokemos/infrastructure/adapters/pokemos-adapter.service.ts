import { Injectable } from '@angular/core';
import { PokemosRepository } from '../../domain/repositories/pokemos-repository';
import { Observable, map, tap } from 'rxjs';
import { PokemosResponse } from '../../domain/interfaces/pokemos_response.interface';
import { HttpClient } from '@angular/common/http';
import { PokemoModel } from '../../domain/models/pokemo-model';

@Injectable({
  providedIn: 'root',
})
export class PokemosAdapterService implements PokemosRepository {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor(private http: HttpClient) {}

  getPokemos(): Observable<PokemoModel[]> {
    return this.http.get<PokemosResponse>(this.url).pipe(
      tap(resp => {
        console.log(resp);
      }),
      map(({ results }) => {
        console.log(results);
        return results;
      })
    );
  }
}
