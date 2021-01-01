/**
 * PROMPT:
 * Given two strings s and t which consist of only lowercase letters.
 * 
 * String t is generated by random shuffling string s and then add one
 * more letter at a random position.
 * 
 * Find the letter that was added in t.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// dictionary
var findTheDifference = function(s, t) {
  let sDict = new Array(26).fill(0);
  let tDict = new Array(26).fill(0);
  
  for (let i = 0; i < s.length; i++) {
      sDict[s.charCodeAt(i) - 97]++;
  }
  
  for (let i = 0; i < t.length; i++) {
      let idx = t.charCodeAt(i) - 97;
      tDict[idx]++;
      if (tDict[idx] > sDict[idx]) {
          return String.fromCharCode(idx + 97);
      }
  }
};

// charCode sums
var findTheDifference = function(s, t) {
  let [sSum, tSum] = [0,0];
  
  for (let i = 0; i < s.length; i++) {
      sSum += s[i].charCodeAt();
  }
  
  for (let i = 0; i < t.length; i++) {
      tSum += t[i].charCodeAt();
  }
  
  return String.fromCharCode(tSum - sSum);
};