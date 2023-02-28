import { Observable } from 'rxjs';
import { PokemoModel } from '../models/pokemo-model';
import { InjectionToken } from '@angular/core';

export const POKEMOS_REPOSITORY = new InjectionToken<PokemosRepository>(
  'POKEMOS_REPOSITORY'
);

export interface PokemosRepository {
  getPokemos(): Observable<PokemoModel[]>;
}
