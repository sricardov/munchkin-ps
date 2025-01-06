import { Dado } from "./Dado.class";
import { Jogador } from "./Jogador.class";
import { Monstro } from "./Monstro.class";

export class Combate {
    private _lutas: { jogador: Jogador, monstros: (Monstro | null)[] }[] = [];

    constructor(
        _jogador: Jogador,
        _monstro: Monstro
    ) {
        this.lutas.push({ jogador: _jogador, monstros: [_monstro] });
    };

    /**
     * Retorna o jogador que iniciou o combate
    */
    get jogador(): Jogador {
        return this.lutas[0].jogador;
    }

    /**
     * Retorna todos os jogadores que estão participando do combate
    */
    get jogadores(): Jogador[] {
        return this.lutas.map(luta => luta.jogador);
    }

    get lutas(): { jogador: Jogador, monstros: (Monstro | null)[] }[] {
        return this._lutas;
    }

    /**
     * Retorna a lista de monstros que um jogador está combatendo atualmente
     * @param jogador Jogador em combate
    */
    getMonstros(jogador: Jogador): Monstro[] {
        return this.lutas.filter(luta => luta.jogador === jogador)[0].monstros as Monstro[];
    }

    adicionarMonstro(monstro: Monstro): void {
        this.lutas.forEach(luta => { luta.monstros.push(monstro) });
    }

    pedirAjuda(jogador: Jogador, barganha: number): void {
        //solicitar ao jogador ajuda, numero aleatório que resulta em sim ou nao
        //ideia: peso maior para barganha maior (banganha = numero de tesouros que o jogador oferece)
        //if(resposta){ this.lutas.push({jogador:jogador, monstros: this.lutas[0].monstros}) }
        //TODO: implementar pedir ajuda (bot)
    }

    /** 
     * Se for true, jogador(es) venceram, caso contrario monstros venceram
    */
    calcularResultado(): boolean {
        let nivelJogadores = 0
        let nivelMonstros = 0;
        this.lutas.forEach(luta => { nivelJogadores += luta.jogador.nivel + luta.jogador.bonus })
        this.lutas[0].monstros.forEach(monstro => { if (monstro) nivelMonstros += monstro.nivel + monstro.bonus })

        return nivelJogadores > nivelMonstros;   //se retornar true jogadores venceram
    }

    tentarFugir(jogador: Jogador, monstro: Monstro | null): void {
        if (monstro) {
            let resultado = new Dado().rolar();
            let index = this.lutas.findIndex(luta => luta.jogador === jogador);
            if (resultado + jogador.fuga > 4) {
                this.lutas[index].monstros.forEach(m => { if (m === monstro) { m = null } }); //remover monstro da luta
            }
            else {
                //aplicar coisa ruim do monstro no jogador
                monstro.aplicarCoisaRuim(jogador);
            }
        }
    }

    resolucaoDeCombate(): void {
        if (this.calcularResultado()) {
            this.lutas[0].monstros.forEach(monstro => this.lutas[0].jogador.ganharNivel(monstro ? monstro.experiencia : 0));
            this.lutas[0].monstros.forEach(monstro => this.lutas[0].jogador.receberTesouro(monstro ? monstro.tesouros : null));
        }
        else {
            this.lutas.forEach(luta => luta.monstros.forEach(monstro => this.tentarFugir(luta.jogador, monstro)));
        }
    }

    iniciarCombate(): void {
        // algum monstro vai ser adicionado?
        // se sim, adicionar monstro
        
        // vai pedir ajuda?
        // se sim, pedir ajuda

        // jogadores podem usar consumiveis ou modificadores de monstros
        // aplicar efeitos das cartas utilizadas

        // resolucao de combate
            // calcular resultado
            // se jogadores venceram, ganhar nivel e tesouro
            // se monstros venceram, tentar fugir
                // se conseguir fugir, remover monstro da luta
                // se nao conseguir fugir, aplicar coisa ruim
    }

}
