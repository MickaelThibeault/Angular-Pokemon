import {Component, Input, OnInit} from '@angular/core';
import {PokemonTypeColorPipe} from "../pipe/pokemon-type-color.pipe";
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../model/pokemon";
import {Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LoaderComponent} from "../loader/loader.component";

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    PokemonTypeColorPipe,
    NgIf,
    FormsModule,
    NgForOf,
    LoaderComponent
  ],
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon
  types : string[]
  isAddForm: boolean

  constructor(private service: PokemonService, private router: Router ) {
  }
  ngOnInit(): void {
    this.types = this.service.getPokemonTypeList()
    this.isAddForm = this.router.url.includes('add')
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type)
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked
    if (isChecked) {
      this.pokemon.types.push(type)
    } else {
      const index = this.pokemon.types.indexOf(type)
      this.pokemon.types.splice(index, 1)
    }
  }

  isTypesValid(type: string) {
    if (this.pokemon.types.length == 1 && this.hasType(type))
      return false

    if (this.pokemon.types.length >2 && !this.hasType(type))
      return false

    return true;
  }

  onSubmit() {
    if (this.isAddForm) {
      this.service.addPokemon(this.pokemon).subscribe((pokemon) => this.router.navigate(['/pokemons', pokemon.id]))
    } else {
      this.service.updatePokemon(this.pokemon).subscribe(() => this.router.navigate(['/pokemons', this.pokemon.id]))
    }
  }

}
