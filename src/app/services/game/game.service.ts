import { Injectable } from '@angular/core';
import { Jogo } from '../../../game/classes/Jogo.class';
import { PlayerService } from '../player/player.service';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private game?: Jogo;

  constructor(private playerService: PlayerService) { }

  public initGame(): void {
    this.game = new Jogo(this.playerService.getPlayers());
  }

  public getGame(): Jogo | undefined {
    return this.game;
  }
}
