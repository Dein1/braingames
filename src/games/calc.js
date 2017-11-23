import { engine } from '..';

const calculate = (a, b, op) => {
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

const chooseOperator = () => {
  const operators = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * operators.length);
  return operators[rand];
};

const generateGameSet = () => {
  const a = Math.round(Math.random() * 30);
  const b = Math.round(Math.random() * 30);
  const operation = chooseOperator();
  const answer = calculate(a, b, operation).toString();
  return [`${a} ${operation} ${b}`, answer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  return engine(generateGameSet, rules);
};
