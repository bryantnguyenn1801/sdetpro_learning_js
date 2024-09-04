import { Animal } from "./Animal";

export class SpeedController {
    private readonly animals: Animal[];

    constructor(...animals: Animal[]) {
        this.animals = animals;
    }

    calculateSpeed(): string {   
        let winner: string = "";
        let maxSpeed: number = -1;

        for (const animal of this.animals) {
            const speed = animal.speed();
            console.log(`${animal.getName()}: ${speed}`);

            if (speed > maxSpeed) {
                maxSpeed = speed;
                winner = animal.getName();
            }
        }

        return `${winner} with speed ${maxSpeed}`;
    }
}