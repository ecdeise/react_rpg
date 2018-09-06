class DiceRoller {
  constructor(dieCount = 1, dieType = 20, modifier = 0) {
    this.dieCount = dieCount;
    this.dieType = dieType;
    this.modifier = modifier;
  }

  roll() {
    const results = [];
    let total = Number(this.modifier);
    for (var i = 0; i < this.dieCount; i++) {
      const diceRoll = this.getRandomDiceRoll(this.dieType);
      total += diceRoll;
      results.push({ d: this.dieType, roll: diceRoll });
    }

    this.total = total;
    this.results = results;

    return { results, total };
  }

  getRandomDiceRoll(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max) + 1;
  }

  // getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   //The maximum is inclusive and the minimum is inclusive
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
}

// dice_roller = new DiceRoller(4, 6, 2);
// a_roll = dice_roller.roll();
// console.log(a_roll);

export default DiceRoller;
