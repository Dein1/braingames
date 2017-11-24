import { engine } from '..';

const isPrime = (number) => {
  const iter = (divisor) => {
    if (divisor > number / 2) {
      return true;
    }
    return number % divisor === 0 ? false : iter(divisor + 1);
  };
  return iter(2);
};

const generateGameSet = () => {
  const question = Math.round(Math.random() * 500);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rules = 'Is this number prime?';
  return engine(generateGameSet, rules);
};
