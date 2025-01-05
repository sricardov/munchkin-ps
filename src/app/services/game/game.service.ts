import { Injectable } from '@angular/core';
import { Jogo } from '../../../game/classes/Jogo.class';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private game: Jogo;

  constructor() { }

  public initGame(
    numJogadores: number, 
    jogadores: Jogador[], 
    gerenciadorTurno: GerenciadorDeTurno, 
    baralhoTesouros: BaralhoTesouros, 
    baralhoPortas: BaralhoPortas, 
    dado: Dado,
  ) {
    this.game = new Jogo();
  }
}
