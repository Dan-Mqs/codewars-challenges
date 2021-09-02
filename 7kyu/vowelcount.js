function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // enter your majic here
    var strLetters = str.split("");
    strLetters.forEach(element => {
        if (vowels.includes(element)){
            vowelsCount++;
        }
    });

    return vowelsCount;
  }

console.log(getCount("banana"));