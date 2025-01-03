import { Classe } from "./Classe.class";
import { Equipamento } from "./Equipamento.class";
import { Raca } from "./Raca.class";

export class EquipamentoMaos extends Equipamento{
    constructor(
        nome: string,
        descricao: string,
        grande: boolean,
        valor: number,
        bonus: number,
        restricoesRaca: Raca[],
        restricoesClasse: Classe[],
    ) {
        super(nome, descricao, grande, valor, bonus, restricoesRaca, restricoesClasse);
    }
}