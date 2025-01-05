import { Carta } from "./Carta.class";
import { Efeito } from "./Efeito.class";

export class CartaTesouro extends Carta {
  constructor(nome: string, descricao: string, imagem: string, efeitos: Efeito[] = []) {
    super(nome, descricao, imagem, efeitos);
  }
} // OK