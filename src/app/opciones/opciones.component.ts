import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'opciones',
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.css'
})
export class OpcionesComponent {
  @Input()
  public pokemons:Pokemon[]=[];
  @Output()
  public seleccion:EventEmitter<number>=new EventEmitter();

  seleccionarPokemon(id:number){
    this.seleccion.emit(id);
  }
}
