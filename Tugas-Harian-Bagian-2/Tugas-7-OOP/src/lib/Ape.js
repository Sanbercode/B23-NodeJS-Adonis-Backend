import {Animal} from "./Animal";

export class Ape extends Animal {

    constructor(name, legs = 2, cold_blooded) {
        super(name, cold_blooded);
        this.legs = legs;
    }

    yell () {
        console.log(`Auoooo`);
    }
}