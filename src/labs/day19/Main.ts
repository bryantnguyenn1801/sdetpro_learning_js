import { Animal } from "./Animal";
import { SpeedController } from "./SpeedController";

function main() {
    const horse = new Animal("Horse", 75);
    const tiger = new Animal("Tiger", 100);
    const dog = new Animal("Dog", 60);

    const speedController = new SpeedController(horse, tiger, dog);
    const winner = speedController.calculateSpeed();

    console.log("Winner is: " + winner);
}

main();