import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export class Habilidade {
  public nome: string;
  public efeito: string;

  constructor(nome: string, efeito: string) {
    this.nome = nome;
    this.efeito = efeito;
  }

  usar(jogo: Jogo, jogador: Jogador): void { // chamar o usar do efeito
    console.log(`Usando a habilidade "${this.nome}": ${this.efeito}`);
  }
}