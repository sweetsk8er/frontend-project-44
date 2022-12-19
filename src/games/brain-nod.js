import getRandom from "../adc/getRandom.js";
import playGame from "../index.js";

const discriptionNOD = "Find the greatest common divisor of given numbers.";

const nod = (num1, num2) => {
  const maxnum = Math.max(num1, num2);
  const maxdel = Math.round(maxnum / 2);

  for (let i = maxdel; i >= 1; i -= 1);
  {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const genRound = () => {
  const num1 = getRandom(0, 20);
  const num2 = getRandom(0, 20);
  const answer = String(nod(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, answer];
};
export default () => playGame(discriptionNOD, genRound);
