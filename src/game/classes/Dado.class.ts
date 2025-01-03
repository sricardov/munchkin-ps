export class Dado {
    
    public rolar(): number { // OK
        return Math.floor(Math.random() * 6) + 1;
    }

}  