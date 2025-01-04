import { Etapa } from "../enums/Etapa.enum";
import { Carta } from "./Carta.class";
import { CartaPorta } from "./CartaPorta.class";
import { Combate } from "./Combate.class";
import { Jogador } from "./Jogador.class";
import { Jogo } from "./Jogo.class";
import { Luta } from "./Luta.class";
import { Maldicao } from "./Maldicao.class";
import { Monstro } from "./Monstro.class";

export class GerenciadorDeTurno {
    public jogo: Jogo;
    public jogadorAtual: Jogador;
    public etapa: Etapa;
    public contagem: number;
    public combates: Combate[];

    constructor(
        jogadorAtual: Jogador, 
        etapa: Etapa, 
        contagem: number, 
        combates: Combate[],
        jogo: Jogo
    ) {
        this.jogo = jogo;
        this.jogadorAtual = jogadorAtual;
        this.etapa = etapa;
        this.contagem = contagem;
        this.combates = combates;
    }

    descartarCartaJogadorAtual(carta: Carta) {
        this.jogadorAtual.mao.descartar(carta);
        if (carta instanceof CartaPorta) 
            this.jogo.baralhoPortas.adicionarDescarte(carta);
        else 
            this.jogo.baralhoTesouros.adicionarDescarte(carta);
    }

    realizarCombate(monstro: Monstro): void {
        const luta = new Luta(monstro, this.jogadorAtual)
        const combate = new Combate(this.jogo)
        combate.lutas.push(luta)
        const ganhou = combate.calcularResultado()
        if (ganhou) {
            this.resgatarRecompensas(monstro, this.jogadorAtual)
            this.jogadorAtual.nivel += 1; // sobe o jogador de nível
        } else {
            monstro.aplicarCoisaRuim(this.jogo, this.jogadorAtual);
        }
    }

    resgatarRecompensas(monstro: Monstro, jogador: Jogador): void {
        for (let i = 0; i < monstro.tesouros; i++) {
            const tesouro = this.jogo.baralhoTesouros.comprar();
            if (tesouro) {
                jogador.mao.adicionarCarta(tesouro); // metodo ainda nao existe em Mao
            }
        }
    }

    abrirPorta(): Carta { // olhar carta de cima do baralho e ver o que é, se não for combate ou maldição, compra a carta. se for, faz o efeito.
        const cartaTopo = this.jogo.baralhoPortas.comprar()
        this.jogadorAtual.mao.adicionarCarta(cartaTopo);

        if (cartaTopo instanceof Monstro) {
            this.realizarCombate(cartaTopo);
            this.descartarCartaJogadorAtual(cartaTopo);
        }
        else if (cartaTopo instanceof Maldicao) {
            cartaTopo.aplicarMaldicao(this.jogo, this.jogadorAtual);
            this.descartarCartaJogadorAtual(cartaTopo);
        }
        else {
            this.jogadorAtual.mao.adicionarCarta(cartaTopo);
            //esperar input do jogador se ele quiser jogar a carta que recebeu
            const querJogar = true
            if (querJogar) {
                this.descartarCartaJogadorAtual(cartaTopo);
                cartaTopo.usar(this.jogo, this.jogadorAtual)
            }
        }
        
        if (cartaTopo instanceof Monstro) this.etapa = Etapa.CARIDADE
        else this.etapa = Etapa.PROCURAR_ENCRENCA

        return cartaTopo;
    }

    procurarEncrenca(): void {
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
                this.descartarCartaJogadorAtual(cartaMonstro);
                this.realizarCombate(cartaMonstro);
            }
        }

        this.etapa = Etapa.SAQUEAR_SALA;
    } // se não combateu ou sofreu maldição, usar uma carta de monstro da mão e iniciar combate com ela

    saquearSala(): Carta { // se não combateu, comprar carta de porta
        const cartaTopo = this.jogo.baralhoPortas.comprar()
        this.jogadorAtual.mao.adicionarCarta(cartaTopo);
        this.etapa = Etapa.CARIDADE;
        return cartaTopo;
    }

    fazerCaridade(): void {
        let numCartas = this.jogadorAtual.mao.verificarcartasNaMao()
        if (numCartas <= 5) {
            this.terminarTurno()
            return;
        }
        // espera input do jogador se ele quiser usar cartas ou distribuir
        const cartasExtras = this.jogadorAtual.mao.verCartas().slice(5); // escolha do jogador

        if (cartasExtras.length > 0) {
            cartasExtras.forEach(carta => {
                carta.usar(this.jogo, this.jogadorAtual);
                this.descartarCartaJogadorAtual(carta);
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
                this.descartarCartaJogadorAtual(carta);
            }
            console.log("Cartas descartadas por ser jogador de menor nível.");
        }

        let index = 0;
        for (const carta of cartasExtras) {
            const jogador = jogadoresDeMenorNivel[index];
            if (jogador.mao.verificarcartasNaMao() < 5)
                jogador.mao.adicionarCarta(carta);
            index = (index + 1) % jogadoresDeMenorNivel.length;
        }

        for (const carta of cartasExtras) {
            this.descartarCartaJogadorAtual(carta);
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
