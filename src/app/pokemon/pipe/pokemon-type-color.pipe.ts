import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Feu':
        color = 'bg-red-600';
        break;
      case 'Eau':
        color = 'bg-blue-600';
        break;
      case 'Plante':
        color = 'bg-green-600';
        break;
      case 'Insecte':
        color = 'bg-amber-900';
        break;
      case 'Normal':
        color = 'bg-gray-400';
        break;
      case 'Vol':
        color = 'bg-blue-400';
        break;
      case 'Poison':
        color = 'bg-purple-400';
        break;
      case 'Fée':
        color = 'bg-pink-300';
        break;
      case 'Psy':
        color = 'bg-purple-900';
        break;
      case 'Electrik':
        color = 'bg-lime-400';
        break;
      case 'Combat':
        color = 'bg-orange-800';
        break;
      default:
        color = 'bg-gray-700';
        break;
    }

    return 'inline-flex items-center me-1 px-2 py-1 text-sm font-medium text-white rounded-full shadow-md '+color

  }

}
