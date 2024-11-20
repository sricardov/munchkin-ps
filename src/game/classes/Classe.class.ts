import { Habilidade } from "./Habilidade.class";

export class Classe {
  private nome: string;
  private habilidades: Habilidade[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionarHabilidade(habilidade: Habilidade): void {
    this.habilidades.push(habilidade);
    console.log(`Habilidade "${habilidade.nome}" adicionada à classe "${this.nome}".`);
  }

  listarHabilidades(): Habilidade[] {
    return this.habilidades;
  }

  getNome(): string {
    return this.nome;
  }
}