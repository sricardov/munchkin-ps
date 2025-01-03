import { Classe } from "./Classe.class";
import { Equipamento } from "./Equipamento.class";
import { Raca } from "./Raca.class";

export class EquipamentoPes extends Equipamento{
    constructor(
        nome: string,
        descricao: string,
        valor: number,
        bonus: number,
        restricoesRaca: Raca[],
        restricoesClasse: Classe[],
        grande: boolean,
    ) {
        super(nome, descricao, grande, valor, bonus, restricoesRaca, restricoesClasse);
    }
}