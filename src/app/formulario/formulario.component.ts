import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output () sumar_1 = new EventEmitter<number>();
  @Output () restar_1 = new EventEmitter<number>(); 
    
  opera: number = 0;
  operb: number = 0;
  resultado: number = 0;

  sumar():void{
    this.resultado = this.opera + this.operb;
    this.sumar_1.emit(this.resultado);
  }
  restar():void{
    this.resultado = this.opera - this.operb;
    this.restar_1.emit(this.resultado);
  }
}
