import {Component, OnInit} from '@angular/core';
import {BorderCardDirective} from "../directive/border-card.directive";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {PokemonTypeColorPipe} from "../pipe/pokemon-type-color.pipe";
import {Pokemon} from "../model/pokemon";
import {Router, RouterLink} from "@angular/router";
import {PokemonService} from "../pokemon.service";
import {SearchPokemonComponent} from "../search-pokemon/search-pokemon.component";

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    BorderCardDirective,
    DatePipe,
    NgForOf,
    NgIf,
    PokemonTypeColorPipe,
    RouterLink,
    SearchPokemonComponent
  ],
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{
  pokemonSelected: Pokemon|undefined
  pokemons: Pokemon[]

  constructor(private router: Router, private service: PokemonService) {
  }

  ngOnInit(): void {
   this.service.getPokemonList()
       .subscribe(pokemonList => this.pokemons = pokemonList)
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemons', pokemon.id])
  }

  selectPokemon(idPokemon: string) {

    const pokemon: Pokemon|undefined = this.pokemons.find(pokemon => pokemon.id == +idPokemon)
    if (pokemon) {
      console.log(`Vous avez cliqué sur le Pokemon ${pokemon.name}`)
      this.pokemonSelected=pokemon
    } else {
      console.log("Vous avez demandé un Pokemon qui n'existe pas")
      this.pokemonSelected=undefined
    }
  }


}
