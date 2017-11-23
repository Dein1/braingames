import readlineSync from 'readline-sync';

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const engine = (gameFun, gameRules) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameRules}\n`);
  const name = askName();

  const iter = (gameCounter) => {
    if (gameCounter >= 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const [question, answer] = gameFun();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
      return iter(gameCounter + 1);
    }
    console.log(`'${userAnswer}' is the wrong answer. Correct answer is '${answer}'`);
    console.log(`Let's try again, ${name}!`);
    return false;
  };
  return iter(0);
};
