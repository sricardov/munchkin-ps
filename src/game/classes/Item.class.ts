import { TipoCarta } from "../enums/TipoCarta.enum";
import { CartaTesouro } from "./CartaTesouro.class";
import { Jogador } from "./Jogador.class";
import { Raca } from "./Raca.class";
import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";


export abstract class Item extends CartaTesouro { // OK
  private valor: number;
  private bonus: number;
  private restricoesRaca: Raca[];
  private restricoesClasse: Classe[];

  constructor(
    nome: string,
    descricao: string,
    valor: number,
    bonus: number,
    restricoesRaca: Raca[],
    restricoesClasse: Classe[],
    efeitos: Efeito[] = []
  ) {
    super(nome, descricao, TipoCarta.ITEM);
    this.valor = valor;
    this.bonus = bonus;
    this.restricoesRaca = restricoesRaca;
    this.restricoesClasse = restricoesClasse;
    this.efeitos = efeitos;
  }

  verificaRestricoes(jogador: Jogador): boolean {
    if (this.restricoesClasse.includes(jogador.getClasse()))
      return false;

    let racaJogador = jogador.getRaca()
    if (racaJogador && this.restricoesRaca.includes(racaJogador))
      return false;

    return true;
  }

  // desequipar(jogador: Jogador): boolean {
  //   return true;
  // }

  getBonus() {
    return this.bonus;
  }

  getValor() {
    return this.valor;
  }

  getNome() {
    return this.nome;
  }

  getDescricao() {
    return this.descricao;
  }

  getEfeitos() {
    return this.efeitos;
  }
}
