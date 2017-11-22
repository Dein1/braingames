import { engine, askName } from '../index';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const question = () => {
  const num = Math.round(Math.random() * 30);
  return [num, isEven(num)];
};

export default () => {
  const name = askName();
  return engine(name, question);
};

