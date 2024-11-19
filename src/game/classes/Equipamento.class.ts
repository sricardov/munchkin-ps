import { TipoItem } from "../enums/TipoItem.enum";
import { Item } from "./Item.class";
import { Raca } from "./Raca.class";

export class Equipamento extends Item {
    constructor(
        nome: string,
        descricao: string,
        valor: number,
        bonus: number,
        grande: boolean,
        usoUnico: boolean,
        racas: Raca[],
        classes: Classe[],
        tipoItem: TipoItem,
    ) {
        super(nome, descricao, valor, bonus, grande, usoUnico, racas, classes);
    }

    equipar(): boolean {
        throw new Error("Method not implemented.");
    }

    desequipar(): void {
        throw new Error("Method not implemented.");
    }
}