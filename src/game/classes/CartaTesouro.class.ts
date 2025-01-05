import { Carta } from "./Carta.class";
import { Efeito } from "./Efeito.class";

export class CartaTesouro extends Carta {
  constructor(
    _nome: string, 
    _descricao: string, 
    _imagem: string, 
    _efeitos: Efeito[] = []
  ) {
    super(_nome, _descricao, _imagem, _efeitos);
  }
} // OK