import { engine } from '..';

const isEven = number => number % 2 === 0;

const generateGameSet = () => {
  const num = Math.round(Math.random() * 30);
  const answer = isEven(num) ? 'yes' : 'no';
  return [num, answer];
};

export default () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  return engine(generateGameSet, rules);
};
