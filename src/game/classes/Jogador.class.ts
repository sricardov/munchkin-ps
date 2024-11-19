import { Carta } from "./Carta.class";

export class Jogador {

    efeitosAtivos: Efeito[] = [];
    itensEquipados: Item[] = [];
    itensGuardados: Item[] = [];
    mao: Mao;

    constructor(
        nome: string,
        nivel: number,
    ) {}

    jogarCarta(carta: Carta) {
        throw new Error('Method not implemented');
    }

    lutar(monstro: Monstro) {
        throw new Error('Method not implemented');
    }

    tentarFugir(monstro: Monstro) {
        throw new Error('Method not implemented');
    }

    pedirAjuda(jogador: Jogador) {
        throw new Error('Method not implemented');
    }

    equiparItem(item: Item) {
        throw new Error('Method not implemented');
    }

    guardarItem(item: Item) {
        throw new Error('Method not implemented');
    }
}