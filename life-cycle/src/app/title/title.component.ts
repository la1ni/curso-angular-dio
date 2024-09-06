import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
  constructor( ){}

  nome: string = "lainara";

  ngOnInit(): void {
    this.nome = `olá, ${this.nome}`
  }

}
