import { engine, askName } from '../index';

const counter = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const question = () => {
  const a = Math.round(Math.random() * 30);
  const b = Math.round(Math.random() * 30);
  const operators = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * operators.length);
  const operation = operators[rand];
  const answer = counter(a, b, operation).toString();
  return [`${a} ${operation} ${b}`, answer];
};

export default () => {
  console.log(`Welcome to the Brain Games!
  What is the result of the expression? \n`);
  const name = askName();
  return engine(name, question);
};
