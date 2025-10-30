import readlineSync from 'readline-sync'
import { getRandomNum } from '../src/utilits.js';

const isEven = (num) => num % 2 === 0;



const startEvenGame = () => {
  console.log('Welcome to the Brain Games!')

  const userName = readlineSync.question('May I have your name? ')

  console.log(`Hello, ${userName}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;

for (let i = 0; i < rounds; i += 1) {
    const question = getRandomNum(1, 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
console.log(`Congratulations, ${userName}!`);
}


export default startEvenGame
