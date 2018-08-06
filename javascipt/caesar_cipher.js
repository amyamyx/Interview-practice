// Write a function that takes a message and an increment amount and
// outputs the same letters shifted by that amount in the alphabet. 
// Assume lowercase and no punctuation. Preserve spaces.

function caesarCipher(str, shift) {
  return str.split(" ").map(word => caesarWord(word, shift)).join(" ");
};

function caesarWord(word, shift) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let uLetters = letters.toUpperCase();
  letters += uLetters;

  let oldIdx, newIdx;
  let newWord =  word.split("").map(ch => {
    oldIdx = letters.indexOf(ch);
    newIdx = (oldIdx % 26 + shift) % 26;
    newIdx += oldIdx < 26 ? 0 : 26;

    return letters[newIdx];
  }).join("");

  return newWord;
};

console.log(caesarCipher('abc xyz ABC XYZ', 1));
// 'bcd yza BCD YZA'