export class Animal {
    protected readonly maxSpeed: number;
    protected readonly name: string;

    constructor(name: string, speed: number) {
        this.name = name;
        this.maxSpeed = speed;
    }

    speed(): number {
        return Math.floor(Math.random() * (this.maxSpeed + 1));
    }

    getName(): string {
        return this.name;
    }
}