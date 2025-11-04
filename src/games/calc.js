import { getRandomNum } from '../utilits.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const generateRound = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const operator = operations[Math.floor(Math.random() * operations.length)];

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      correctAnswer = String(num1 * num2);
      break;
  }

  const question = `${num1} ${operator} ${num2}`;
  return [question, correctAnswer];
};

const startCalcGame = () => {
  runGame(generateRound, description);
};

export default startCalcGame;
