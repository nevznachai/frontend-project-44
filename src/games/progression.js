import { getRandomNum } from '../utilits.js'
import runGame from '../index.js'

const description = 'What number is missing in the progression?'

const generateProgression = (length, start, step) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const length = getRandomNum(5, 10)
  const start = getRandomNum(1, 20)
  const step = getRandomNum(1, 10)

  const progression = generateProgression(length, start, step)

  const hiddenIndex = getRandomNum(0, length - 1)
  const correctAnswer = String(progression[hiddenIndex])

  const questionArray = [...progression]
  questionArray[hiddenIndex] = '..'

  const question = questionArray.join(' ')

  return [question, correctAnswer]
}

const startProgressionGame = () => {
  runGame(generateRound, description)
}

export default startProgressionGame
