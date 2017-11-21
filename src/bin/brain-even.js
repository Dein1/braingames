#! /usr/bin/env node
import { askName, engine } from '..';
import { question, answer } from '../games/even';

console.log(`Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no". \n`);

const name = askName();
engine(name, question, answer);
