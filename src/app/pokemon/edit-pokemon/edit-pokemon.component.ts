import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {PokemonService} from "../pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {PokemonFormComponent} from "../pokemon-form/pokemon-form.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [
    PokemonFormComponent,
    NgIf
  ],
  template: `
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center p-4">
          Editer {{ pokemon?.name }}
        </h2>
        <p *ngIf="pokemon" class="flex justify-center mb-6">
          <img [src]="pokemon.picture" alt="{{ pokemon.name }}" class="w-32 h-32 object-cover rounded-full border border-gray-300 shadow-lg">
        </p>
        <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit {
  pokemon:Pokemon|undefined

  constructor(private service: PokemonService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    const idPokemon: string|null = this.route.snapshot.paramMap.get('id')
    if (idPokemon) {
      this.service.getPokemonById(+idPokemon)
          .subscribe(pokemon => this.pokemon = pokemon)
    } else {
      this.pokemon = undefined
    }
  }

}
