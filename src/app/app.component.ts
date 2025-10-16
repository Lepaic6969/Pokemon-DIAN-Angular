import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public mostrarPokemon:boolean=false;
  public message:string='';
  public aciertos:number=0;

  constructor(private pokemonService:PokemonService){
    this.pokemonService.buscarPokemones();
  }
  get pokemonId():number{
    return this.pokemonService.pokemon.id;
  }
  get pokemons():Pokemon[]{
    return this.pokemonService.pokemons;
  }

  activarLogicaSeleccion(id:number){
    this.mostrarPokemon=true;
    if(id===this.pokemonId){
      this.message="🎉¡Felicidades, acertaste¡ Es "+this.pokemonService.pokemon.name+". 🎉";
      this.aciertos++;
    }else{
      this.message=`Ops, era ${this.pokemonService.pokemon.name}. Has perdido. 🙉`;
      this.aciertos=0;
    }
  }
  activarLogicaResetear(){
    this.pokemonService.resetPokemons();
    this.mostrarPokemon=false;

    this.pokemonService.buscarPokemones();
  }
}
