export abstract class Efeito {
  public nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public abstract usar(): void;
}