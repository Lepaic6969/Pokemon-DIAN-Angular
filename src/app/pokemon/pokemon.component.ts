import { Component,Input } from '@angular/core';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  @Input()
  mostrarPokemon:boolean=false;
  @Input()
  pokemonId:number=4;

  get pokemonUrl():string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
  }
}
