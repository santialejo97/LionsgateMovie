import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemosComponent } from './components/pokemos/pokemos.component';
import { PokemosService } from './services/pokemos.service';
import { DomainModule } from '../domain/domain.module';
import {
  POKEMOS_REPOSITORY,
  PokemosRepository,
} from '../domain/repositories/pokemos-repository';
import { PokemosAdapterService } from '../infrastructure/adapters/pokemos-adapter.service';

@NgModule({
  declarations: [PokemosComponent],
  imports: [CommonModule, DomainModule],
  exports: [PokemosComponent],
  providers: [{ provide: POKEMOS_REPOSITORY, useClass: PokemosAdapterService }],
})
export class ApplicationModule {}
