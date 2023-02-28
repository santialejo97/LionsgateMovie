import { Component, OnInit } from '@angular/core';
import { PokemosService } from '../../services/pokemos.service';
import { PokemoModel } from '../../../domain/models/pokemo-model';

@Component({
  selector: 'app-pokemos',
  templateUrl: './pokemos.component.html',
  styleUrls: ['./pokemos.component.scss'],
})
export class PokemosComponent {
  public pokemos!: PokemoModel[];

  constructor(private pokemosService: PokemosService) {
    this.pokemosService.getPokemos().subscribe(pokemos => {
      console.log(pokemos);
      this.pokemos = pokemos;
      console.log(this.pokemos);
    });
  }
}
