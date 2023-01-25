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

  sumar():void{
    this.resultado = this.operA + this.operB;
  }
  restar():void{
    this.resultado = this.operA - this.operB;
  }
}
