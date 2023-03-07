import { AfterViewInit, Component } from '@angular/core';
import { PokemosService } from '../../services/pokemos.service';
import { PokemonRequest } from '../../../domain/interfaces/pokemo_request.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDateil } from '../../../domain/interfaces/pokemon_dateil.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements AfterViewInit {
  private _pokemon!: PokemonRequest;
  private _namePokemon!: string;
  public detail!: PokemonDateil;

  get pokemonsDateil() {
    return this.pokemosService.pokemonsDateils;
  }

  get pokemon() {
    return this._pokemon;
  }

  constructor(
    private pokemosService: PokemosService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(({ name }) => {
      this._namePokemon = name;
      if (this.pokemonsDateil.length === 10) {
        if (this.pokemonsDateil.find(pokemon => pokemon.name === name)) {
          this.pokemonsDateil
            .filter(pokemon => pokemon.name === name)
            .forEach(pokemon => {
              this._pokemon = pokemon;
            });
        }
        this.buscarPokemon(name);
      } else {
        this.buscarPokemon(name);
      }
    });
  }

  ngAfterViewInit(): void {
    this.pokemosService.pokemonDatail(this._namePokemon).subscribe(dateil => {
      if (dateil === undefined) return;
      this.detail = dateil;
    });
  }

  buscarPokemon(name: string): void {
    this.pokemosService.getPokemo(name).subscribe(pokemon => {
      if (pokemon.sprites === undefined) return;
      this._pokemon = pokemon;
      console.log(pokemon);
    });
  }
}
