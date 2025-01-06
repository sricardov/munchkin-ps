import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placar.component.html',
  styleUrl: './placar.component.scss'
})
export class PlacarComponent {

  @Input() jogador: string = '';
  @Input() nivel: number = 0;
}
