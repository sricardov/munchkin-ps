import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export abstract class Efeito {
  public nome: string;
  public valor: number;

  constructor(nome: string, valor: number) { // OK
    this.nome = nome;
    this.valor = valor;
  }

  public abstract usar(jogador: Jogador): void; // OK
}
