import { Classe } from "./Classe.class";
import { Equipamento } from "./Equipamento.class";
import { Raca } from "./Raca.class";

export class EquipamentoCorpo extends Equipamento{
    constructor(
        grande: boolean,
        nomeItem: string,
        valor: number,
        bonus: number,
        restricoesRaca: Raca[],
        restricoesClasse: Classe[],
        nome: string,
        descricao: string) {
            super(grande, nomeItem, valor, bonus, restricoesRaca, restricoesClasse, nome, descricao);
        }
}