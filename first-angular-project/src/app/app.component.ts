import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './hello.component';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Hello, MenuComponent, Button, EntryDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'first-angular-project';
  buttonLabel: string = 'Clique';
}
