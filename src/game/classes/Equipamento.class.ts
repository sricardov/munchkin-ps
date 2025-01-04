import { Classe } from "./Classe.class";
import { Efeito } from "./Efeito.class";
import { Inventario } from "./Inventario.class";
import { Item } from "./Item.class";
import { Raca } from "./Raca.class";

export class Equipamento extends Item {
    private grande: boolean;
    private inventario: Inventario;

    constructor(
        nome: string,
        descricao: string,
        grande: boolean,
        valor: number,
        bonus: number,
        restricoesRaca: Raca[],
        restricoesClasse: Classe[],
        inventario: Inventario,
        efeito: Efeito[] = []
    ) {
        super(nome, descricao, valor, bonus, restricoesRaca, restricoesClasse, efeito);
        this.grande = grande;
        this.inventario = inventario;
    }

    guardar(): boolean {
        if (this.inventario.getItensGuardados().includes(this)) {
            console.log(`O item ${this.nome} já está guardado no inventário.`);
            return false;
        }

        this.inventario.guardarItem(this);
        console.log(`O item ${this.nome} foi guardado no inventário.`);
        return true;
    }

    descartar(): void {
        this.inventario.descartarItem(this);
        console.log(`O item ${this.nome} foi descartado do inventário.`);
    }

    getGrande(): boolean {
        return this.grande;
    }
}