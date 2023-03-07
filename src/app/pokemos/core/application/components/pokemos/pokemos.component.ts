import { Component, OnInit } from '@angular/core';
import { PokemosService } from '../../services/pokemos.service';
import { PokemoModel } from '../../../domain/models/pokemo-model';
import { PokemonRequest } from '../../../domain/interfaces/pokemo_request.interface';
import { Observer } from 'rxjs';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pokemos',
  templateUrl: './pokemos.component.html',
  styleUrls: ['./pokemos.component.scss'],
})
export class PokemosComponent {
  public pokemos!: PokemoModel[];
  public pokemon!: PokemonRequest;
  public mostrar: boolean = false;

  observer: Observer<PokemonRequest> = {
    next: (pokemon: PokemonRequest) => {
      this.pokemon = pokemon;
      this.mostrar = true;
    },
    error: (err: HttpErrorResponse) => {
      Swal.fire({
        icon: 'error',
        title: err.error,
        text: 'no existe, por favor valida la informacion',
      });
    },
    complete: () => {},
  };

  get pokemonsDateil() {
    return this.pokemosService.pokemonsDateils;
  }

  constructor(private pokemosService: PokemosService) {
    this.getListPokemonsByDetails();
  }

  getListPokemonsByDetails(cantidad: number = 10) {
    this.pokemosService.getPokemos(cantidad).subscribe(pokemons => {
      this.pokemos = pokemons;
      for (const pokemon of this.pokemos) {
        this.pokemosService.getListDateilPokemonsByName(pokemon.name);
      }
      console.log(this.pokemos);
    });
  }

  searchPokemon(txt: string) {
    if (txt === '') {
      this.mostrar = false;
      return;
    }
    this.pokemosService
      .getPokemo(txt.toLowerCase().trim())
      .subscribe(this.observer);
  }

  cantidadPokemones(cantidad: string) {
    console.log(cantidad);
    this.getListPokemonsByDetails(+cantidad);
  }
}
