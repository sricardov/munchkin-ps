import { CartaTesouro } from "./CartaTesouro.class";
import { Jogador } from "./Jogador.class";
import { Raca } from "./Raca.class";
import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";


export abstract class Item extends CartaTesouro { // OK

  constructor(
    _nome: string,
    _descricao: string,
    _imagem: string,
    _efeitos: Efeito[] = [],
    protected _valor: number,
    protected _bonus: number,
    protected _restricoesRaca: Raca[],
    protected _restricoesClasse: Classe[],
  ) {
    super(_nome, _descricao, _imagem, _efeitos);
  }

  verificaRestricoes(jogador: Jogador): boolean {
    let classeJogador = jogador.classe;
    if (classeJogador && this._restricoesClasse.includes(classeJogador))
      return false;

    let racaJogador = jogador.raca;
    if (racaJogador && this._restricoesRaca.includes(racaJogador))
      return false;

    return true;
  }

  desequipar(jogador: Jogador): boolean {
    return true;
  }

  get bonus() {
    return this._bonus;
  }

  get valor() {
    return this._valor;
  }
}
