import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Pokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons:Pokemon[]=[]; //Contendrá los 4 pokemons de las opciones de respuesta
  public pokemon!:Pokemon; //Será el pokemón correcto
  private baseEndpoint='https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient:HttpClient){}

  buscarPokemones():void{
    //const numeros=[15,15,500,630]; //Son los pokemones que se van a buscar
    const numeros:number[]=this.generarArregloAleatorios(); 

    const peticion1=this.httpClient.get<Pokemon>(`${this.baseEndpoint}/${numeros[0]}`);
    const peticion2=this.httpClient.get<Pokemon>(`${this.baseEndpoint}/${numeros[1]}`);
    const peticion3=this.httpClient.get<Pokemon>(`${this.baseEndpoint}/${numeros[2]}`);
    const peticion4=this.httpClient.get<Pokemon>(`${this.baseEndpoint}/${numeros[3]}`);

    //Aquí lo único que hago es lanzar las 4 peticiones
    forkJoin([peticion1,peticion2,peticion3,peticion4]).subscribe({
      next:(resultados)=>{ //La variable resultados almacena los valores de las 4 consultas
        this.pokemons=[...resultados];
        this.seleccionarPokemon();
        //console.log(this.pokemons);
        //console.log(this.pokemon);
      },
      error:(error)=>{
        console.log(`Error al realizar las peticiones de los pokemons: ${error}`);
      }

    });
  }

  seleccionarPokemon():void{
     //Tendremos valores entre cero y tres
    this.pokemon=this.pokemons[Math.floor(Math.random()*4)];
  }

  resetPokemons():void{
    this.pokemons=[];
  }

  generarArregloAleatorios():number[]{
    const aleatorios:number[]=[];
    while(aleatorios.length<4){
      let numeroAleatorio=Math.floor(Math.random()*251);
      if(!aleatorios.includes(numeroAleatorio)){
        aleatorios.push(numeroAleatorio);
      }
    }
    console.log(aleatorios);
    return aleatorios;
  }
}
