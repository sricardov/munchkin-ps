import { CartaPorta } from "./CartaPorta.class";
import { TipoCarta } from "../enums/TipoCarta.enum";
import { Efeito } from "./Efeito.class";

export class Raca extends CartaPorta {
  constructor(nome: string, descricao: string, tipo: TipoCarta, efeitos: Efeito[] = []) {
    super(nome, descricao, tipo, efeitos);
  }
}