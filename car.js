class Vehicle{
      constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
      honk(){
        console.log("BEEP");
      }
      toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`);
      }
}


//2
class Car extends Vehicle{
    constructor(make, model, year){
     super(make, model, year);
     this.numWheels = 4;
    }
}
//3
class Motorcycle extends Vehicle{
    constructor(make, model, year){
     super(make, model, year);
     this.numWheels = 2;
    }
    revEngine(){
    console.log("VROOM!!!");
    }
}
//4
class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}