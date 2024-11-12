import { CardType } from "./CardType.class";

export class Card {

    constructor(
        public name: string, 
        public description: string,
        public type: CardType
    ) {}

    play(): void {}
    putInHand(): void {}

}
