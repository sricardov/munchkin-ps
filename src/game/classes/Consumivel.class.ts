import { Item } from "./Item.class";
import { Raca } from "./Raca.class";
import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";

export class Consumivel extends Item { // OK

    constructor(nome: string, descricao: string, valor: number, bonus: number, restricoesRaca: Raca[], restricoesClasse: Classe[], efeitos: Efeito[] = []) {
        super(nome, descricao, valor, bonus, restricoesRaca, restricoesClasse, efeitos);
    }

}