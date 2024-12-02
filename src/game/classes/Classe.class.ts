import { Habilidade } from "./Habilidade.class";
import { CartaPorta } from "./CartaPorta.class";
import { TipoCarta } from "../enums/TipoCarta.enum";
import { Efeito } from "./Efeito.class";

export class Classe extends CartaPorta {
  private habilidades: Habilidade[] = [];

  constructor(nome: string, descricao: string, tipo: TipoCarta, efeitos: Efeito[] = []) {
    super(nome, descricao, tipo, efeitos);
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