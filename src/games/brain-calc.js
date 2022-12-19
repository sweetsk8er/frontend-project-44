import getRandom from "../adc/getRandom.js";
import playGame from "../index.js";

const discriptionCalc = "What is the result of the expression?";

const getRandomOperator = (operators) =>
  operators[getRandom(0, operators.length - 1)];

const calc = (num1, num2, symbol) => {
  switch (symbol) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      throw new Error("Error!");
  }
};

const genRound = () => {
  const num1 = getRandom(0, 20);
  const num2 = getRandom(0, 20);
  const randomOperator = getRandomOperator(["+", "-", "*"]);
  const answer = String(calc(num1, num2, randomOperator));
  const question = `${num1} ${randomOperator} ${num2}`;
  return [question, answer];
};
export default () => playGame(discriptionCalc, genRound);
