function getMiddle(s){
  let word = s.split('')
  if (s.length%2 == 0){
      return word[Math.floor(word.length/2-1)] + word[Math.floor((word.length/2))]
  }
  else {
      return word[Math.floor(word.length/2)]
  }
}

console.log(getMiddle("test"))
