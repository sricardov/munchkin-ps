import { TipoCarta } from "../enums/TipoCarta.enum";
import { Efeito } from "./Efeito.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export abstract class Carta {

  constructor(
      public nome: string, 
      public descricao: string,
      public tipo: TipoCarta,
      protected efeitos: Efeito[] = []
  ) {}

  public usar(jogo: Jogo, jogador: Jogador): void { // OK
    console.log(`Usando a carta: ${this.nome}`);

    if (this.efeitos.length > 0) {
      console.log(`Ativando os efeitos da carta "${this.nome}":`);
      this.efeitos.forEach((efeito) => efeito.usar(jogo, jogador));
    } else {
      console.log(`A carta "${this.nome}" não possui efeitos.`);
    }
  }
}