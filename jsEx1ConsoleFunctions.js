// 1. Define a function max() that takes two numbers and returns the largest of them.
function max(a, b) {
  if (a > b) return a;
  else return b;
}
console.log('max(5,9):', max(5, 9));


// 2. Define a function maxOfThree() that takes three numbers and returns the largest.
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
}
console.log('maxOfThree(3,7,5):', maxOfThree(3, 7, 5));


// 3. Write a function that takes a character and returns true if it's a vowel.
function isVowel(ch) {
  return ['a','e','i','o','u','A','E','I','O','U'].includes(ch);
}
console.log("isVowel('a'):", isVowel('a'));
console.log("isVowel('b'):", isVowel('b'));


// 4. Write a function translate() to translate text into "rövarspråket".
function translate(text) {
  let result = '';
  for (let ch of text) {
    if ('bcdfghjklmnpqrstvwxyz'.includes(ch.toLowerCase())) {
      result += ch + 'o' + ch;
    } else {
      result += ch;
    }
  }
  return result;
}
console.log('translate("this is fun"):', translate("this is fun"));


// 5. Define sum() and multiply() functions for array of numbers.
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
function multiply(arr) {
  return arr.reduce((a, b) => a * b, 1);
}
console.log('sum([1,2,3,4]):', sum([1,2,3,4]));
console.log('multiply([1,2,3,4]):', multiply([1,2,3,4]));


// 6. Define a function reverse() that reverses a string.
function reverse(str) {
  return str.split('').reverse().join('');
}
console.log('reverse("jag testar"):', reverse("jag testar"));


// 7. Represent a bilingual lexicon and translate function.
let lexicon = {
  "merry":"god", "christmas":"jul", "and":"och",
  "happy":"gott", "new":"nytt", "year":"år"
};
function translateToSwedish(text) {
  return text.split(" ")
             .map(word => lexicon[word.toLowerCase()] || word)
             .join(" ");
}
console.log('translateToSwedish("merry christmas and happy new year"):', translateToSwedish("merry christmas and happy new year"));


// 8. Write a function findLongestWord() that returns the length of the longest word.
function findLongestWord(words) {
  return Math.max(...words.map(w => w.length));
}
console.log('findLongestWord(["apple","banana","cherry","pineapple"]):', findLongestWord(["apple","banana","cherry","pineapple"]));


// 9. Write a function filterLongWords() that returns words longer than i.
function filterLongWords(words, i) {
  return words.filter(w => w.length > i);
}
console.log('filterLongWords(["hi","hello","wonderful"], 4):', filterLongWords(["hi","hello","wonderful"], 4));


// 10. Write a function charFreq() that builds a frequency listing of characters in a string.
function charFreq(str) {
  let freq = {};
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log('charFreq("abbabcbdbabdbdbabababcbcbab"):', charFreq("abbabcbdbabdbdbabababcbcbab"));
