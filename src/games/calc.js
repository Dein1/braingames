export const question = () => {
  const a = Math.round(Math.random() * 30);
  const b = Math.round(Math.random() * 30);
  const operators = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * operators.length);
  const operation = operators[rand];
  return `${a} ${operation} ${b}`;
};

export const answer = (expression) => {
  const arr = expression.split(' ');
  const [a, op, b] = arr;
  if (op === '+') {
    return (Number(a) + Number(b)).toString();
  } else if (op === '-') {
    return (Number(a) - Number(b)).toString();
  }
  return (Number(a) * Number(b)).toString();
};
