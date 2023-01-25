import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora';
  operA: number = 0;
  operB: number = 0;
  resultado: number = 0;
  negativo: string =''

  sumar():void{
    this.resultado = this.operA + this.operB;
    this.negativo ='';
  }
  restar():void{
    this.resultado = this.operA - this.operB;
    if(this.resultado < 0){
      this.negativo = 'El resultado es negativo';
    }else{
      this.negativo = 'El resultado es positivo';
    }
  }
}
