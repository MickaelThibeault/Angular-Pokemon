import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../model/pokemon";
import {PokemonTypeColorPipe} from "../pipe/pokemon-type-color.pipe";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {PokemonService} from "../pokemon.service";
import {LoaderComponent} from "../loader/loader.component";

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    PokemonTypeColorPipe,
    DatePipe,
    NgIf,
    NgForOf,
    LoaderComponent
  ],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent implements OnInit{

  pokemons: Pokemon[]
  pokemon: Pokemon|undefined
  constructor(private route: ActivatedRoute, private router: Router, private service: PokemonService) {
  }

  ngOnInit(): void {
    const idPokemon: string|null = this.route.snapshot.paramMap.get('id')
    if (idPokemon) {
      this.service.getPokemonById(+idPokemon)
          .subscribe(pokemon => this.pokemon = pokemon)
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.service.deletePokemonById(pokemon.id).subscribe(() => this.goToPokemonList())
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons'])
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons/edit', pokemon.id])
  }
}
