import readlineSync from 'readline-sync';

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const evenGame = (name) => {
  const iter = (counter) => {
    if (counter >= 3) {
      console.log(`Congratulations, ${name}!`);
      return undefined;
    }
    const number = Math.round(Math.random() * 30);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(number) === answer) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    console.log(`'${answer}' is the wrong answer. Correct answer is '${isEven(number)}'`);
    console.log(`Let's try again, ${name}!`);
    return undefined;
  };
  return iter(0);
};
