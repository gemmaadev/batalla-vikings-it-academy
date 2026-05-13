import { Soldier } from "./Soldier";

export class Saxon extends Soldier {
  constructor(healthArg: number, strengthArg: number) {
    super(healthArg, strengthArg);
  }

  receiveDamage(damage: number): string {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}
