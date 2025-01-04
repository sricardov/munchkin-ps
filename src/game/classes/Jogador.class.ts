import { Carta } from "./Carta.class";
import { Item } from "./Item.class";
import { Efeito } from "./Efeito.class";
import { Classe } from "./Classe.class";
import { Raca } from "./Raca.class";
import { Mao } from "./Mao.class";
import { Inventario } from "./Inventario.class";
import { Jogo } from "./Jogo.class";

export class Jogador {

    jogo: Jogo;
    nome: string;
    nivel: number;
    classes: Classe[];
    raca: Raca;
    mao: Mao;
    inventario: Inventario;
    efeitosAtivos: Efeito[] = [];

    constructor(
        jogo: Jogo,
        nome: string,
        nivel: number,
        classes: Classe[],
        raca: Raca,
        mao: Mao,
        inventario: Inventario,
        efeitosAtivos: Efeito[] = []
    ) {
        this.jogo = jogo;
        this.nome = nome;
        this.nivel = nivel;
        this.classes = classes;
        this.raca = raca;
        this.mao = mao;
        this.inventario = inventario;
        this.efeitosAtivos = efeitosAtivos;
    }

    jogarCarta(carta: Carta) { // descarta da mão e, se for o caso, adicionar ao inventário
        throw new Error('Method not implemented');
    }

    equiparItem(item: Item) { // chamar metodo do inventario
        throw new Error('Method not implemented');
    }

    desequiparItem(item: Item) { // chamar metodo do inventario
        throw new Error('Method not implemented');
    }
    
    morrer(): void {} // alterar o nivel do jogar
}