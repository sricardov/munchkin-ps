import { Component } from '@angular/core';
import { CanvasComponent } from './components/canvas/canvas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
