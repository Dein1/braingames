import { engine } from '..';

const isBalanced = (arr) => {
  if (Math.abs(arr[0] - arr[arr.length - 1]) > 1) {
    return false;
  }
  return true;
};

const balance = (number) => {
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

const generateGameSet = () => {
  const number = Math.round(Math.random() * 9999);
  const answer = balance(number);
  return [number, answer];
};

export default () => {
  const rules = 'Balance the given number.';
  return engine(generateGameSet, rules);
};
