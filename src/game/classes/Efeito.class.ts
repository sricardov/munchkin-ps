export abstract class Efeito {
  public nome: string;

  constructor(nome: string) { // OK
    this.nome = nome;
  }

  public abstract usar(): void; // OK
}