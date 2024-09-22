import {countries} from './countries.mjs';
import {webTechs} from './webTechs.mjs';

console.log(countries);
console.log(webTechs);

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const cleanTxt = text.replaceAll('.', '').replaceAll(',', '');
const arrayTxt = cleanTxt.split(' ');

console.log('number of words in the array:', arrayTxt.length);
