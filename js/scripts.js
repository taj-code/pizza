//Business Logic
function name(word) {
  for (i=0; i<vowels.length; i++) {
    if (word.charAt(0) === vowels[i]) {
      return true;
    }
    return false;
  }
}