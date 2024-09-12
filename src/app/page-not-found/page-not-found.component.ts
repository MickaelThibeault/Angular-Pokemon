import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" class="mb-4 w-1/2 max-w-xs rounded shadow-lg" alt="Pokémon"/>
      <h1 class="text-2xl font-bold mb-4">Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="bg-teal-500 text-white hover:bg-teal-600 font-semibold py-2 px-4 rounded transition-colors">
        Retourner à l'accueil
      </a>
    </div>

  `,
})
export class PageNotFoundComponent {

}
