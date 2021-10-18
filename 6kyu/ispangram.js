function isPangram(string){
    let sentence = string.split("")
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let lettersUsed = ""

    sentence.forEach((letter) => {
        if (alphabet.split("").includes(letter.toLowerCase())){
            if (!lettersUsed.split("").includes(letter.toLowerCase())){
                lettersUsed += letter.toLowerCase()
            }
        }
    })
    
    return lettersUsed.split("").sort().join("") == alphabet
  }


