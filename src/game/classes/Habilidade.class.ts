export class Habilidade {
  public nome: string;
  public efeito: string;

  constructor(nome: string, efeito: string) {
    this.nome = nome;
    this.efeito = efeito;
  }

  usar(): void {
    console.log(`Usando a habilidade "${this.nome}": ${this.efeito}`);
  }
}