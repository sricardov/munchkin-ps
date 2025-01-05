import { Injectable } from '@angular/core';
import { Jogador } from '../../../game/classes/Jogador.class';
import { Mao } from '../../../game/classes/Mao.class';
import { Inventario } from '../../../game/classes/Inventario.class';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players: Jogador[] = [];

  constructor() { }

  public initPlayer(nome: string): void {
    const player = new Jogador(nome);
    this.players.push(player);
  }
}
