import { Component, OnInit } from '@angular/core';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { CommonModule } from '@angular/common';
import { Button } from '../../interfaces/button';
import { MesaComponent } from '../mesa/mesa.component';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule, MenuButtonComponent, MesaComponent],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    this.initButtonList();
  }

  buttonList: Button[] = [];

  initButtonList() {
    this.buttonList = [
      {text: 'Novo jogo', action: this.startGame}, 
      {text: 'Sair do jogo', action: this.exitGame}
    ];
  }
  
  startGame() {
    console.log('Game started');
  }
  
  exitGame() {
    location.href = 'http://profs.ic.uff.br/~troy/courses/2024.2/ps.html';
  }

}
