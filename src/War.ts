import { Viking } from "./Viking";
import { Saxon } from "./Saxon";

export class War {
  vikingArmy: Viking[];
  saxonArmy: Saxon[];

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking: Viking): void {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon: Saxon): void {
    this.saxonArmy.push(saxon);
  }

  vikingAttack(): string {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length,
    );
    const randomViking = this.vikingArmy[randomVikingIndex];

    const result = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }

  saxonAttack(): string {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length,
    );
    const randomViking = this.vikingArmy[randomVikingIndex];

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }

  showStatus(): string {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    }

    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`;
    }

    return `Vikings and Saxons are still in the thick of battle.`;
  }
}
