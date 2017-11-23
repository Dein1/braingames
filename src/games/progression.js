import { engine } from '..';

const generateProgression = () => {
  const firstElement = Math.round(Math.random() * 10);
  const step = Math.round((Math.random() * 10) + 1);
  const iter = (acc) => {
    if (acc.length >= 10) {
      return acc;
    }
    const newAcc = acc.concat(firstElement + (step * acc.length));
    return iter(newAcc);
  };
  return iter([]);
};

const generateGameSet = () => {
  const progression = generateProgression();
  const randomElement = Math.floor(Math.random() * progression.length);
  const answer = progression[randomElement];
  const question = progression.map(el => (el === answer ? '..' : el)).join(' ');
  return [question, answer.toString()];
};

export default () => {
  const rules = 'What number is missing in this progression?';
  return engine(generateGameSet, rules);
};
