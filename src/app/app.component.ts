import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora';
  resultadoPadre: number=0;

  suma(res:number){
    this.resultadoPadre=res;
    Swal.fire({
      title: 'Resultado Obtenido',
      text:'El resultado es: ' + res,
    })
  }

  resta(res:number){
    this.resultadoPadre=res;
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
