import { Injectable } from '@angular/core';
import { GameService } from '../game/game.service';
import { Etapa } from '../../../game/enums/Etapa.enum';

@Injectable({
  providedIn: 'root'
})
export class TurnService {

  constructor(private gameService: GameService) {}

  public nextStep(): void {
    if (!this.gameService.getGame()) throw new Error('Jogo não iniciado.');

    switch(this.gameService.getGame()!.gerenciadorTurno.etapa){
      case Etapa.ABRIR_PORTA:
        this.gameService.getGame()!.gerenciadorTurno.etapa = Etapa.PROCURAR_ENCRENCA;
        break;
      case Etapa.PROCURAR_ENCRENCA:
        this.gameService.getGame()!.gerenciadorTurno.etapa = Etapa.SAQUEAR_SALA;
        break;
      case Etapa.SAQUEAR_SALA:
        this.gameService.getGame()!.gerenciadorTurno.etapa = Etapa.CARIDADE;
        break;
      case Etapa.CARIDADE:
        this.endTurn();
        break;
    }
    this.gameService.getGame()!.gerenciadorTurno.iniciarEtapa();
  }

  public endTurn(): void {
    if (!this.gameService.getGame()) throw new Error('Jogo não iniciado.');
    this.gameService.getGame()!.gerenciadorTurno.terminarTurno();
  }
}
