import { Classe } from "./Classe.class";
import { Item } from "./Item.class";
import { Raca } from "./Raca.class";

export class Equipamento extends Item {

    private grande: boolean;

    constructor(
        grande: boolean,
        nomeItem: string,
        valor: number,
        bonus: number,
        restricoesRaca: Raca[],
        restricoesClasse: Classe[],
        nome: string,
        descricao: string
    ) {
        super(nomeItem, valor, bonus, restricoesRaca, restricoesClasse, nome, descricao);
        this.grande = grande;
    }

    equipar(): boolean {
        throw new Error("Method not implemented.");
    }

    desequipar(): void {
        throw new Error("Method not implemented.");
    }
}