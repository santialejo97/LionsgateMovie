import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemosAdapterService } from './adapters/pokemos-adapter.service';
import {
  PokemosRepository,
  POKEMOS_REPOSITORY,
} from '../domain/repositories/pokemos-repository';
import { DomainModule } from '../domain/domain.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, DomainModule],
  providers: [{ provide: POKEMOS_REPOSITORY, useClass: PokemosAdapterService }],
})
export class InfrastructureModule {}
