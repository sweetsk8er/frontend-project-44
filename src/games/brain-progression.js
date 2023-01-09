import getRandom from '../utilities/getRandom.js';
import playGame from '../index.js';

const discriptionProg = 'What number is missing in the progression?';

const getProgress = () => {
  const start = getRandom(1, 100);
  const step = getRandom(1, 10);
  const length = getRandom(5, 10);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const genRound = () => {
  const progression = getProgress();
  const randomIndex = getRandom(0, progression.length - 1);
  const randomPartInProgression = progression[randomIndex];
  const answer = String(randomPartInProgression);

  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};
export default () => playGame(discriptionProg, genRound);
