export class Animal{

    constructor(name, legs = 4, cold_blooded = false){
        this.name = name;
        this.legs = legs;
        this.cold_blooded = cold_blooded;
    }
}