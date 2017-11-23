import { engine } from '..';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateGameSet = () => {
  const a = Math.round(Math.random() * 20);
  const b = Math.round(Math.random() * 20);
  const answer = gcd(a, b).toString();
  return [`${a} ${b}`, answer];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  return engine(generateGameSet, rules);
};
