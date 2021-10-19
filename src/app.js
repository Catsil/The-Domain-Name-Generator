const PRONUONS = ["the", "our"];
const ADJS = ["great", "big"];
const NOUNS = ["jogger", "racoon"];

const EXTS = ["er", "es", "oon"];

window.onload = function() {
  let domains = dom();
  document.querySelector("#domain").innerHTML = domains;
};
function dom() {
  let alldomains = [];
  for (let i = 0; i < PRONUONS.length; i++) {
    for (let j = 0; j < ADJS.length; j++) {
      for (let k = 0; k < NOUNS.length; k++) {
        for (let l = 0; l < EXTS.length; l++) {
          let word = PRONUONS[i] + ADJS[j] + NOUNS[k];
          let lengthExtend = EXTS[l].length;
          let last = word.slice(-lengthExtend);
          if (last === EXTS[l]) {
            let newWord = word.replace(last, "." + last);
            alldomains.push(newWord);
          } else {
            alldomains.push(word + "." + EXTS[l]);
          }
        }
      }
    }
  }
  return alldomains;
}
