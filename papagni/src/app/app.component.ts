import { Component } from '@angular/core';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

@Component({
  selector: 'app-root',
  imports: [SecondComponentComponent, ThirdComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'papagni';
}
