export class Dado {
    
    public rolar(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

}  