// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  const wordArr = str.toLowerCase().split("");

  for (let i = 0; i < wordArr.length; i++) {
    let numbersOfAppearances = 0;

    for (let j = 0; j < wordArr.length; j++) {
      if (wordArr[i] === wordArr[j]) numbersOfAppearances++;
    }

    if (numbersOfAppearances > 1) return false;
  }

  return true;
}

console.log(isIsogram("Dermatoglyphics"));
