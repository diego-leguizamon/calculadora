import { Component } from '@angular/core';
import Swal from 'sweetalert2';
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

  suma(res:number){
    //this.resultado=res;
    Swal.fire({
      title: 'Resultado Obtenido',
      text:'El resultado es: ' + res,
    })
  }

  resta(res:number){
    this.resultado = res;
    if(res<0){
      Swal.fire({
        title:'Resultado Obtenido',
        text:'El resultado es negativo: ' + res,
      });
    }else{
      Swal.fire({
        title: 'Resultado Obtenido',
        text:'El resultado obtenido es: '+res,
      });
    }
  }
}
