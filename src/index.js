import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const engine = (name, questionFun, answerFun) => {
  const iter = (gameCounter) => {
    if (gameCounter >= 3) {
      console.log(`Congratulations, ${name}!`);
      return NaN;
    }
    const question = questionFun();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const realAnswer = answerFun(question);
    if (realAnswer === userAnswer) {
      console.log('Correct!');
      return iter(gameCounter + 1);
    }
    console.log(`'${userAnswer}' is the wrong answer. Correct answer is '${realAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    return NaN;
  };
  return iter(0);
};

export { askName, engine };
