import { TipoCarta } from "../enums/TipoCarta.enum";
import { Carta } from "./Carta.class";
import { Jogador } from "./Jogador.class";
import { Raca } from "./Raca.class";

export class Item extends Carta {
    constructor(
        nome: string,
        descricao: string,
        valor: number,
        bonus: number,
        grande: boolean,
        usoUnico: boolean,
        racas: Raca[],
        classes: Classe[],
    ) {
        super(nome, descricao, TipoCarta.ITEM);
    }

    vender(jogador: Jogador): void {
        throw new Error("Method not implemented.");
    }
}