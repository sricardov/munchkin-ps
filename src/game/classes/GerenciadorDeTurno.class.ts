import { Etapa } from "../enums/Etapa.enum";
import { Carta } from "./Carta.class";
import { CartaPorta } from "./CartaPorta.class";
import { Combate } from "./Combate.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";
import { Maldicao } from "./Maldicao.class";
import { Monstro } from "./Monstro.class";

export class GerenciadorDeTurno {
    public jogo: Jogo;
    public jogadorAtual: Jogador;
    public etapa: Etapa;
    public contagem: number;
    public combate: Combate | null;

    constructor(
        jogadorAtual: Jogador, 
        etapa: Etapa, 
        contagem: number, 
        combate: Combate | null,
        jogo: Jogo
    ) {
        this.jogo = jogo;
        this.jogadorAtual = jogadorAtual;
        this.etapa = etapa;
        this.contagem = contagem;
        this.combate = combate;
    }

    iniciarEtapa() {
        if (this.etapa = Etapa.ABRIR_PORTA) {
            this.etapaAbrirPorta();
        } else if (this.etapa = Etapa.PROCURAR_ENCRENCA) {
            this.etapaProcurarEncrenca();
        } else if (this.etapa = Etapa.SAQUEAR_SALA) {
            this.etapaSaquearSala();
        } else if (this.etapa = Etapa.CARIDADE){
            this.etapaFazerCaridade();
        }
    }

    _descartarCartaJogadorAtual(carta: Carta) {
        this.jogadorAtual.mao.removerCarta(carta);
        this.jogo.descartar(carta);
    }

    _realizarCombate(monstro: Monstro): void {
        const combate = new Combate(this.jogo, this.jogadorAtual, monstro);
        this.combate = combate;
        //espera input dos jogadores se quiserem usar itens de uso unico (consumiveis, maldicoes, etc)
        //exemplo de jogadores e cartas jogadas (apagar depois):
        let j1 = this.jogo.jogadores[0];
        let j2 = this.jogo.jogadores[1];
        let c1 = this.jogo.baralhoTesouros.getBaralho()[2];
        let c2 = this.jogo.baralhoTesouros.getBaralho()[3];
        let c3 = this.jogo.baralhoTesouros.getBaralho()[5];
        const cartasUtilizadas: [Jogador, Carta][] = [[j1,c1],[j1,c2],[j2,c3]]
        
        for (const [jogador, carta] of cartasUtilizadas) {
            jogador.descartarCarta(carta);
            carta.usar(this.jogadorAtual);
        }

        const ganhou = combate.calcularResultado()
        if (ganhou) {
            this._resgatarRecompensas(monstro, this.jogadorAtual)
            this.jogadorAtual.ganharNivel(1); // sobe o jogador de nível
        } else {
            monstro.aplicarCoisaRuim(this.jogadorAtual);
        }
    }

    _resgatarRecompensas(monstro: Monstro, jogador: Jogador): void {
        for (let i = 0; i < monstro.tesouros; i++) {
            const tesouro = this.jogo.baralhoTesouros.comprar();
            if (tesouro) {
                jogador.receberTesouro(tesouro);
            }
        }
    }

    etapaAbrirPorta(): Carta { // olhar carta de cima do baralho e ver o que é, se não for combate ou maldição, compra a carta. se for, faz o efeito.
        const cartaTopo = this.jogo.baralhoPortas.comprar()
        this.jogadorAtual.mao.adicionarCarta(cartaTopo);

        if (cartaTopo instanceof Monstro) {
            this._realizarCombate(cartaTopo);
            this._descartarCartaJogadorAtual(cartaTopo);
        }
        else if (cartaTopo instanceof Maldicao) {
            cartaTopo.aplicarMaldicao(this.jogadorAtual);
            this._descartarCartaJogadorAtual(cartaTopo);
        }
        else {
            this.jogadorAtual.mao.adicionarCarta(cartaTopo);
            //esperar input do jogador se ele quiser jogar a carta que recebeu
            const querJogar = true
            if (querJogar) {
                this._descartarCartaJogadorAtual(cartaTopo);
                cartaTopo.usar(this.jogadorAtual)
            }
        }
        
        if (cartaTopo instanceof Monstro) this.etapa = Etapa.CARIDADE
        else this.etapa = Etapa.PROCURAR_ENCRENCA

        return cartaTopo;
    }

    etapaProcurarEncrenca(): void {
        let temMonstro = false
        let indexMonstro = 0
        let cartas = this.jogadorAtual.mao.verCartas()
        for (let i = 0; i < cartas.length; i++) {
            if (cartas[i] instanceof Monstro) {
                indexMonstro = i;
                temMonstro = true;
            }
        }

        if (temMonstro) {
            //esperar input do jogador caso ele queira jogar carta Monstro na mão (procurar encrenca)
            const querJogar = true
            const cartaMonstro = cartas[indexMonstro]; // escolha do jogador
            if (querJogar && cartaMonstro instanceof Monstro) {
                this._descartarCartaJogadorAtual(cartaMonstro);
                this._realizarCombate(cartaMonstro);
            }
        }

        this.etapa = Etapa.SAQUEAR_SALA;
    } // se não combateu ou sofreu maldição, usar uma carta de monstro da mão e iniciar combate com ela

    etapaSaquearSala(): Carta { // se não combateu, comprar carta de porta
        const cartaTopo = this.jogo.baralhoPortas.comprar()
        this.jogadorAtual.mao.adicionarCarta(cartaTopo);
        this.etapa = Etapa.CARIDADE;
        return cartaTopo;
    }

    etapaFazerCaridade(): void {
        let numCartas = this.jogadorAtual.mao.verificarCartasNaMao()
        if (numCartas <= 5) {
            this.terminarTurno()
            return;
        }
        // espera input do jogador se ele quiser usar cartas ou distribuir
        const cartasExtras = this.jogadorAtual.mao.verCartas().slice(5); // escolha do jogador

        if (cartasExtras.length > 0) {
            cartasExtras.forEach(carta => {
                carta.usar(this.jogadorAtual);
                this._descartarCartaJogadorAtual(carta);
            });
        }

        if (cartasExtras.length == 0) {
            this.terminarTurno()
            return;
        }

        const outrosJogadores = this.jogo.jogadores.filter(jogador => jogador !== this.jogadorAtual);

        // acha jogadores com menor nivel e distribui as cartas
        const menorNivel = Math.min(...outrosJogadores.map(jogador => jogador.nivel));
        const jogadoresDeMenorNivel = outrosJogadores.filter(jogador => jogador.nivel === menorNivel);

        if (this.jogadorAtual.nivel === menorNivel) {
            for (const carta of cartasExtras) {
                this._descartarCartaJogadorAtual(carta);
            }
            console.log("Cartas descartadas por ser jogador de menor nível.");
        }

        let index = 0;
        for (const carta of cartasExtras) {
            const jogador = jogadoresDeMenorNivel[index];
            if (jogador.mao.verificarCartasNaMao() < 5)
                jogador.mao.adicionarCarta(carta);
            index = (index + 1) % jogadoresDeMenorNivel.length;
        }

        for (const carta of cartasExtras) {
            this._descartarCartaJogadorAtual(carta);
        }

        console.log("Cartas distribuídas entre os jogadores de menor nível.");
        this.terminarTurno()
        return;
    } // chamar metodo de Mao para ver se está dentro do limite, se nao estiver, precisa dar as cartsas e tals

    terminarTurno(): void {
        this.etapa = Etapa.ABRIR_PORTA;
        this.contagem++;

        const nextPlayerIndex = this.contagem % this.jogo.jogadores.length;
        this.jogadorAtual = this.jogo.jogadores[nextPlayerIndex];


        console.log(`Turno terminado. Próximo jogador: ${this.jogadorAtual.nome}. Turno atual: ${this.contagem}`);
    } // troca o jogadorAtual, reseta a etapa e incrementa a contagem

}
