import { Classe } from "./Classe.class";
import { Item } from "./Item.class";
import { Raca } from "./Raca.class";
import { TipoEquipamento } from "../enums/TipoEquipamento.enum";

export class Equipamento extends Item {

    grande: boolean;
    tipoSlot: TipoEquipamento;

    constructor(
        grande: boolean,
        tipoSlot: TipoEquipamento,
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
        this.tipoSlot = tipoSlot;
    }

    equipar(): boolean {
        throw new Error("Method not implemented.");
    }

    desequipar(): void {
        throw new Error("Method not implemented.");
    }
}