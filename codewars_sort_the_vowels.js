/*
In this kata, we want to sort the vowels in a special format.

Task
Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "Codewars" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

List all the Vowels on the right side of |
List every character except Vowels on the left side of |
Case doesn't matter
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
*/

const sortVowels = (s) => {
  let string = '';
  let vowels = {
    a : true,
    e : true,
    i : true,
    o : true,
    u : true
  }
  if(s === undefined || s === null || typeof s === 'number') {
    return string;
  }
  for(let i = 0; i < s.length; i++) {
    if(vowels[s[i].toLowerCase()] === true) {
      string += '|' + s[i];
    } else {
      string += s[i] + '|';
    }
    if(i < s.length - 1) {
      string += '\n';
    }
  }
  return string;
}