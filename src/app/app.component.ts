import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {BorderCardDirective} from "./pokemon/directive/border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon/pipe/pokemon-type-color.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, BorderCardDirective, DatePipe, PokemonTypeColorPipe, RouterLink],
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent {

}
