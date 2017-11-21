#! /usr/bin/env node
import { askName, engine } from '..';
import { question, answer } from '../games/calc';

console.log(`Welcome to the Brain Games!
What is the result of the expression? \n`);

const name = askName();
engine(name, question, answer);
