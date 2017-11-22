import { engine, askName } from '../index';

const isBalanced = (arr) => {
  if (Math.abs(arr[0] - arr[arr.length - 1]) > 1) {
    return false;
  }
  return true;
};

const balancer = (number) => {
  const array = number.toString().split('').map(Number).sort();
  const iter = (items) => {
    if (isBalanced(items)) {
      return items.join('');
    }
    const max = items[items.length - 1];
    const min = items[0];
    const part = Math.floor((max - min) / 2);
    const newMax = max - part;
    const newMin = min + part;
    const newArray = items.slice(1, items.length - 1).concat(newMin, newMax).sort();
    return iter(newArray);
  };
  return iter(array);
};

const question = () => {
  const number = Math.round(Math.random() * 9999);
  const answer = balancer(number);
  return [number, answer];
};

export default () => {
  console.log(`Welcome to the Brain Games!
  Balance the given number.\n`);
  const name = askName();
  return engine(name, question);
};
