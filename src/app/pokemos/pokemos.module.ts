import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
  ],
  exports: [ApplicationModule],
})
export class PokemosModule {}
