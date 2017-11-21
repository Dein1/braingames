const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const question = () => {
  const a = Math.round(Math.random() * 20);
  const b = Math.round(Math.random() * 20);
  return `${a} ${b}`;
};


export const answer = (expression) => {
  const [a, b] = expression.split(' ');
  return gcd(Number(a), Number(b)).toString();
};
