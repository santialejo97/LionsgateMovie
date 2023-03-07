import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DomainModule } from '../domain/domain.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, DomainModule],
})
export class InfrastructureModule {}
