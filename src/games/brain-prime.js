import getRandom from '../utilities/getRandom.js';
import playGame from '../index.js';

const discriptionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genRound = () => {
  const num = getRandom(0, 20);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};
export default () => playGame(discriptionPrime, genRound);
