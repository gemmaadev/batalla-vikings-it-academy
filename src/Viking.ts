import { Soldier } from "./Soldier";

export class Viking extends Soldier {
  name: string;

  constructor(nameArg: string, healthArg: number, strengthArg: number) {
    super(healthArg, strengthArg);
    this.name = nameArg;
  }

  receiveDamage(damage: number): string {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(): string {
    return `Odin Owns You All!`;
  }
}
