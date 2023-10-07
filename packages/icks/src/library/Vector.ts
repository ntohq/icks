export default class Vector {
    magnitude: number
    direction: number
    
    constructor()
    {
        this.magnitude = 0;
        this.direction = 0;
    }

    PrintData()
    {
        console.log(`${this.magnitude} | ${this.direction}`);
    }
}