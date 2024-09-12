import {Component, OnInit} from '@angular/core';
import {PokemonFormComponent} from "../pokemon-form/pokemon-form.component";
import {Pokemon} from "../model/pokemon";

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [
    PokemonFormComponent
  ],
  template: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center p-4">Ajouter un Pokemon</h2>
        <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;
  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}
