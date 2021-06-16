"use strict";

// TODO - write your code here.

let randomDamage = () => {
  return Math.ceil(Math.random() * 10);
};

let chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  if ((randNum = 0)) {
    return (randNum = 0 ? opt1 : opt2);
  }
};
let attackPlayer = function (health) {
  return health - randomDamage;
};

let logHealth = (player, health) => console.log(`${player} health:${health}`);

let logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

let isDead = (health) => health <= 0 ? true : false;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker = player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      isDead(player2Health) == true;
      {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      isDead(player1Health) == true;
      {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight("Tom", "Jerry", 100, 100);
