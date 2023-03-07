import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './core/application/components/pokemon/pokemon.component';
import { PokemosComponent } from './core/application/components/pokemos/pokemos.component';

const routes: Routes = [
  {
    path: 'pokemon/:name',
    component: PokemonComponent,
  },
  {
    path: 'pokemons',
    component: PokemosComponent,
  },
  {
    path: '**',
    redirectTo: 'pokemons',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemosRoutingModule {}
