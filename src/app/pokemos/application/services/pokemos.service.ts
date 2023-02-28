import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PokemoModel } from '../../domain/models/pokemo-model';
import {
  POKEMOS_REPOSITORY,
  PokemosRepository,
} from '../../domain/repositories/pokemos-repository';

@Injectable({
  providedIn: 'root',
})
export class PokemosService {
  constructor(
    @Inject(POKEMOS_REPOSITORY) private pokemoRepository: PokemosRepository
  ) {}

  getPokemos(): Observable<PokemoModel[]> {
    return this.pokemoRepository.getPokemos().pipe(
      tap(results => {
        console.log(results);
      })
    );
  }
}
