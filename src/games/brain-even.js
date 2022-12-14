import readlineSync from 'readline-sync';
import getRandom from '../adc/getRandom.js'


const braineven = () => {
    console.log('Welcome to the Brain-Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log ('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i += 1) {
        const number = getRandom (0,20);
        console.log ('Question: ', number);
        const answer = readlineSync.question('Your answer: ');

        const check1 = (number % 2 === 0) && (answer === "yes");
        const check2 = (number % 2 !== 0) && (answer === 'no');

        if (check1 === true || check2 === true) {
        console.log ('Correct!');
    } else {
        const wronganswer = (answer === 'yes' ? 'no' : 'yes');
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${wronganswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
}
    console.log (`Congratulations, ${userName}`)
}; export default braineven;