import getRandom from '../adc/getRandom.js';
import playGame from '../index.js';

const discriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const genRound = () => {
  const num = getRandom(0, 20);
  const question = num;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(discriptionEven, genRound);
