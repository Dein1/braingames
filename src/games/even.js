const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const question = () => Math.round(Math.random() * 30);
export const answer = number => isEven(number);

