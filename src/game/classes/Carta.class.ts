import { TipoCarta } from "../enums/TipoCarta.enum";

export class Carta {

    constructor(
        public nome: string, 
        public descricao: string,
        public tipo: TipoCarta
    ) {}

    jogar(): void {}
    guardarNaMao(): void {}

}