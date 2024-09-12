import { Component } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  produtos: string[] = [];

  mostrarProdutos: boolean = false

  usuarioInput: string = "Digite o próximo produto";

  menuType: string = "manager"

  clicar() {
    this.mostrarProdutos = true
  }

  apagarTexto(){
    this.usuarioInput = ""
  }

  adicionar() {
    this.produtos.push(this.usuarioInput)
    this.usuarioInput = ""
  }

  remover() {
    this.produtos.pop()
  }

  constructor() {
    this.produtos = [
      "caneta",
      "marca-texto",
      "régua",
      "apontador"
    ]

  }
}


