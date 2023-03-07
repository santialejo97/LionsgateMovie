import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemosComponent } from './components/pokemos/pokemos.component';
import { DomainModule } from '../domain/domain.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemosComponent, PokemonComponent],
  imports: [CommonModule, DomainModule, RouterModule],
  exports: [PokemosComponent],
})
export class ApplicationModule {}
