import { engine, askName } from '../index';

const counter = (a, b, op) => {
  if (op === '+') {
    return a + b;
  } else if (op === '-') {
    return a - b;
  }
  return a * b;
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
  const name = askName();
  return engine(name, question);
};
