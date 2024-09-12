import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit{
  searchTerms = new Subject<string>
  pokemons$: Observable<Pokemon[] | undefined>

  constructor(private router: Router, private service: PokemonService) {
  }
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap ((term) => this.service.searchPokemonList(term))
    )
  }

  search(search: string) {
    this.searchTerms.next(search)
  }

  goToDetail(pokemon: Pokemon) {
    this.router.navigate(['/pokemons/'+pokemon.id])
  }

}
