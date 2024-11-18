import { Component } from '@angular/core';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [MenuButtonComponent],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent {

}
