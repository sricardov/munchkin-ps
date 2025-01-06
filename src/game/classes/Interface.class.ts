import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export class Interface {
  
  protected _jogo: Jogo | null = null;
  protected _jogadores: Jogador[] = [];
    
  constructor(
    ) {

      }

    desenhaTelaInicial(): void {}

    desenhaMesa(): void {}

    desenhaMenu(): void {}

    desenhaConfig(): void {}

    iniciarJogo(): void {
      this._jogo = new Jogo(this._jogadores);
    }
}