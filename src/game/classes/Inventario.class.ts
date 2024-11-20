import { Equipamento } from "./Equipamento.class";
import { Item } from "./Item.class";

export class Inventario {
    public cabeca: Equipamento;
    public corpo: Equipamento;
    public pes: Equipamento;
    public maoEsquerda: Equipamento;
    public maoDireita: Equipamento;
  
    private itensEquipados: Item[];
    private itensGuardados: Item[];

    constructor(cabeca: Equipamento, corpo: Equipamento, pes: Equipamento, maoEsquerda: Equipamento, maoDireita: Equipamento) {
        this.cabeca = cabeca;
        this.corpo = corpo;
        this.pes = pes;
        this.maoEsquerda = maoEsquerda;
        this.maoDireita = maoDireita;
        this.itensEquipados = [];
        this.itensGuardados = [];
      }
}
