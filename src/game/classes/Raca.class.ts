import { CartaPorta } from "./CartaPorta.class";
import { TipoCarta } from "../enums/TipoCarta.enum";
import { Efeito } from "./Efeito.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export class Raca extends CartaPorta { // OK
  constructor(nome: string, descricao: string, tipo: TipoCarta, efeitos: Efeito[] = []) {
    super(nome, descricao, tipo, efeitos);
  }

  override usar(jogador: Jogador): void {
    jogador.definirRaca(this);
    this.adicionarEfeito(jogador);
  }
}
