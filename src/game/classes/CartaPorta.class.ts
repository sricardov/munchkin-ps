import { Carta } from "./Carta.class";
import { Efeito } from "./Efeito.class";
import { TipoCarta } from "../enums/TipoCarta.enum";

export class CartaPorta extends Carta {
  constructor(nome: string, descricao: string, tipo: TipoCarta, efeitos: Efeito[] = []) {
    super(nome, descricao, tipo, efeitos);
  }

  public override guardarNaMao(): void {
    console.log(`Guardando a carta porta: ${this.nome}`);
  }
}