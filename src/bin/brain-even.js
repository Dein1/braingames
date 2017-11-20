#! /usr/bin/env node
import { askName, evenGame } from '..';

console.log(`Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no". \n`);

const name = askName();
evenGame(name);
