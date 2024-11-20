import { TipoCarta } from "../enums/TipoCarta.enum";
import { Carta } from "./Carta.class";
import { Jogador } from "./Jogador.class";
import { Raca } from "./Raca.class";
import { Classe } from "./Classe.class";

export class Item extends Carta {
  private nomeItem: string;
  private valor: number;
  private bonus: number;
  private restricoesRaca: Raca[];
  private restricoesClasse: Classe[];

  constructor(
    nomeItem: string,
    valor: number,
    bonus: number,
    restricoesRaca: Raca[],
    restricoesClasse: Classe[],
    nome: string,
    descricao: string,
  ) {
    super(nome, descricao, TipoCarta.ITEM);
    this.nomeItem = nomeItem;
    this.valor = valor;
    this.bonus = bonus;
    this.restricoesRaca = restricoesRaca;
    this.restricoesClasse = restricoesClasse;
  }

  vender(jogador: Jogador): boolean {
    throw new Error("Method not implemented.");
  }
}
