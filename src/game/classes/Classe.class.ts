import { Habilidade } from "./Habilidade.class";
import { CartaPorta } from "./CartaPorta.class";
import { Efeito } from "./Efeito.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";

export class Classe extends CartaPorta {
  private habilidades: Habilidade[] = [];

  constructor(
    _nome: string, 
    _descricao: string, 
    _imagem: string, 
    _efeitos: Efeito[] = []
  ) {
    super(_nome, _descricao, _imagem, _efeitos);
  }

  public override usar(jogador: Jogador): void {
    jogador.definirClasse(this);
    //this.adicionarEfeito(jogador);
  }

  adicionarHabilidade(habilidade: Habilidade): void { // OK
    this.habilidades.push(habilidade);
    console.log(`Habilidade "${habilidade.nome}" adicionada à classe "${this.nome}".`);
  }

  listarHabilidades(): Habilidade[] { // OK
    return this.habilidades;
  }

}
