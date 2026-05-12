export class Soldier {
  health: number;
  strength: number;

  constructor(healthArg: number, strengthArg: number) {
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack(): number {
    return this.strength;
  }

  receiveDamage(damage: number): void {
    this.health -= damage;
  }
}
