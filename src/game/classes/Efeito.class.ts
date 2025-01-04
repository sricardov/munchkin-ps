import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export abstract class Efeito {
  public nome: string;

  constructor(nome: string) { // OK
    this.nome = nome;
  }

  public abstract usar(jogo: Jogo, jogador: Jogador): void; // OK
}