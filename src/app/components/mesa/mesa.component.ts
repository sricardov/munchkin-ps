import { Component } from '@angular/core';
import { PlacarComponent } from '../placar/placar.component';

@Component({
  selector: 'app-mesa',
  standalone: true,
  imports: [PlacarComponent],
  templateUrl: './mesa.component.html',
  styleUrl: './mesa.component.scss'
})
export class MesaComponent {


}
