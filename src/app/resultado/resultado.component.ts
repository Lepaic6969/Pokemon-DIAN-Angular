import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  @Input()
  public message:string='Aquí va el mensaje del resultado del intento de adivinar';
  @Output()
  public resetear:EventEmitter<void>=new EventEmitter();

  restablecerJuego(){
    this.resetear.emit();
  }
}
