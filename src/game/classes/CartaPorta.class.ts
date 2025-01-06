import { Carta } from "./Carta.class";
import { Efeito } from "./Efeito.class";

export class CartaPorta extends Carta {
  constructor(
    _nome: string, 
    _descricao: string, 
    _imagem: string, 
    _efeitos: Efeito[] = []
  ) {
    super(_nome, _descricao, _imagem, _efeitos);
  }

  // public override guardarNaMao(): void {
  //   console.log(`Guardando a carta porta: ${this.nome}`);
  // }
}