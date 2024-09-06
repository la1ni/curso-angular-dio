import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements OnDestroy, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade: number = 0;

  adicionar(){
    this.quantidade += 1;
  }

  remover(){
    this.quantidade -= 1;
  }

  // quando o programa inicializa
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // quando o programa inicializa ou é alterado
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // quando o primeiro conteúdo é inicializado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  // depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // quando há alterações, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  //  // quando há alterações, verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Tchauu');
  }
}
