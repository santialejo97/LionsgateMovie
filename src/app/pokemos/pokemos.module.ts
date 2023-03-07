import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationModule } from './core/application/application.module';
import { DomainModule } from './core/domain/domain.module';
import { InfrastructureModule } from './core/infrastructure/infrastructure.module';
import { PokemosRoutingModule } from './pokemos-routing.module';
import { POKEMOS_REPOSITORY } from './core/domain/repositories/pokemos-repository';
import { PokemosAdapterService } from './core/infrastructure/adapters/pokemos-adapter.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
    PokemosRoutingModule,
  ],
  exports: [ApplicationModule],
  providers: [{ provide: POKEMOS_REPOSITORY, useClass: PokemosAdapterService }],
})
export class PokemosModule {}
