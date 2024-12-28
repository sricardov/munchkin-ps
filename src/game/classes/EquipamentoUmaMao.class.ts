import { Classe } from "./Classe.class";
import { Equipamento } from "./Equipamento.class";
import { EquipamentoMaos } from "./EquipamentoMaos.class";
import { Raca } from "./Raca.class";

export class EquipamentoUmaMao extends EquipamentoMaos{
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