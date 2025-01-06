import { Item } from "./Item.class";
import { Raca } from "./Raca.class";
import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";

export class Consumivel extends Item { // OK

    constructor(
        _nome: string, 
        _descricao: string, 
        _imagem: string,
        _efeitos: Efeito[] = [],
        _valor: number, 
        _bonus: number, 
        _restricoesRaca: Raca[], 
        _restricoesClasse: Classe[], 
    ) {
        super(_nome, _descricao, _imagem, _efeitos, _valor, _bonus, _restricoesRaca, _restricoesClasse);
    }

}