export class Dado {
    
    rolar(): number { // OK
        return Math.floor(Math.random() * 6) + 1;
    }

}  