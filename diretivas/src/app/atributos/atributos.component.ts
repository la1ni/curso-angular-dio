import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.css'
})
export class AtributosComponent {
  estilo: string = "disable"

  corFundo: string = 'red'
  corFonte: string = 'blue'


  trocar(){
    if(this.estilo == "enable"){
      this.estilo = "disable"
    } else if (this.estilo == "disable"){
      this.estilo = "enable"
    }
  }

}
