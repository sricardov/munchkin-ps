import { Dado } from "./Dado.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";
import { Monstro } from "./Monstro.class";

export class Combate {
    public lutas: {jogador: Jogador, monstros: (Monstro | null)[]} []=[];

    constructor(jogador: Jogador, monstro: Monstro) {
        this.lutas.push({jogador: jogador, monstros: [monstro]});
    };

    public adicionarMonstro(monstro: Monstro): void {
        this.lutas.forEach(luta => { luta.monstros.push(monstro) });
    }

    /** 
     * Se for true, jogador(es) venceram, caso contrario monstros venceram
    */
    public calcularResultado(): boolean {
        let nivelJogadores = 0
        let nivelMonstros = 0;
        this.lutas.forEach(luta => { nivelJogadores += luta.jogador.nivel + luta.jogador.bonus })
        this.lutas[0].monstros.forEach(monstro => { if (monstro) nivelMonstros +=monstro.nivel+monstro.bonus })
        
        return nivelJogadores > nivelMonstros;   //se retornar true jogadores venceram
        
    }

    public tentarFugir(jogador: Jogador, monstro: Monstro): void {
        let resultado = new Dado().rolar();
        let index = this.lutas.findIndex(luta => luta.jogador === jogador);
        if (resultado + jogador.fuga > 4){
            this.lutas[index].monstros.forEach(m => {if (m === monstro) {m = null}}); //remover monstro da luta
        }
        else {
            //aplicar coisa ruim do monstro no jogador
            monstro.aplicarCoisaRuim(jogador);
        }

    }
    // public resolucaodeCombate(): void {
    //     if (this.calcularResultado()) {
    //         this.lutas[0].monstros.forEach(monstro => this.lutas[0].jogador.ganharNivel(monstro.experiencia));
    //         this.lutas[0].monstros.forEach(monstro => this.lutas[0].jogador.receberTesouro(monstro.tesouros));
    //     }
    //     else {
    //         this.lutas.forEach(luta => luta.monstros.forEach(monstro => this.tentarFugir(luta.jogador, monstro))); 
    //     }
    // }

    public pedirAjuda(jogador: Jogador, barganha: number): void {
        //solicitar ao jogador ajuda, numero aleatório que resulta em sim ou nao
        //ideia: peso maior para barganha maior (banganha = numero de tesouros que o jogador oferece)
        //if(resposta){ this.lutas.push({jogador:jogador, monstros: this.lutas[0].monstros}) }
        //TODO: implementar pedir ajuda (bot)
        
    }

}
