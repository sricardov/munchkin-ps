import { TipoCarta } from "../enums/TipoCarta.enum";
import { CartaTesouro } from "./CartaTesouro.class";
import { Jogador } from "./Jogador.class";
import { Raca } from "./Raca.class";
import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";


export abstract class Item extends CartaTesouro {
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
    efeitos: Efeito[] = []
  ) {
    super(nome, descricao, TipoCarta.ITEM);
    this.nomeItem = nomeItem;
    this.valor = valor;
    this.bonus = bonus;
    this.restricoesRaca = restricoesRaca;
    this.restricoesClasse = restricoesClasse;
  }
}
