#! /usr/bin/env node
import { askName, engine } from '../index';
import { question, answer } from '../games/gcd';

console.log(`Welcome to the Brain Games!
Find the greatest common divisor of given numbers. \n`);

const name = askName();
engine(name, question, answer);
