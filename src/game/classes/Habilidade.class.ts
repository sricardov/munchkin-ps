import { Efeito } from "./Efeito.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export class Habilidade {
  public nome: string;
  public efeito: Efeito;

  constructor(nome: string, efeito: Efeito) {
    this.nome = nome;
    this.efeito = efeito;
  }

  usar(jogador: Jogador): void { // chamar o usar do efeito
     this.efeito.usar(jogador);
  }
}