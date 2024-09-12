import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./directive/border-card.directive";
import {PokemonTypeColorPipe} from "./pipe/pokemon-type-color.pipe";
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./pokemon.service";
import {PokemonFormComponent} from "./pokemon-form/pokemon-form.component";
import {EditPokemonComponent} from "./edit-pokemon/edit-pokemon.component";
import {AddPokemonComponent} from "./add-pokemon/add-pokemon.component";
import { authGuard } from "../auth.guard"

export const pokemonRoutes: Routes = [
  { path: 'edit/:id', component: EditPokemonComponent, canActivate: [authGuard] },
  { path: 'add', component: AddPokemonComponent, canActivate: [authGuard] },
  { path: '', component: ListPokemonComponent, canActivate: [authGuard] },
  { path: ':id', component: DetailPokemonComponent, canActivate: [authGuard] },
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [
      PokemonService
  ]
})
export class PokemonModule { }
