import { Jogo } from "./Jogo.class";

export class Interface {
    public jogo: Jogo;
    
    constructor(jogo: Jogo) {
        this.jogo = jogo;
      }
    

    desenhaTelaInicial(): void {}

    desenhaMesa(): void {}

    desenhaMenu(): void {}

    desenhaConfig(): void {}
}