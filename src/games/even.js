import { engine } from '..';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateGameSet = () => {
  const num = Math.round(Math.random() * 30);
  return [num, isEven(num)];
};

export default () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  return engine(generateGameSet, rules);
};
