import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestApiComponent } from './test-api/test-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TestApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apiconnectiontest';
}
