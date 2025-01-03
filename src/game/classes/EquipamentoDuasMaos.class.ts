import { Classe } from "./Classe.class";
import { EquipamentoMaos } from "./EquipamentoMaos.class";
import { Raca } from "./Raca.class";

export class EquipamentoDuasMaos extends EquipamentoMaos{
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