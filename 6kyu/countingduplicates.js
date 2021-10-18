function duplicateCount(text){
    text = text.toLowerCase().split("")
    let lettersList = []
    let repeatedLetters = []

    text.forEach((letter)=>{
        if (lettersList.includes(letter)){
            if(!repeatedLetters.includes(letter)){
                repeatedLetters.push(letter)
            }
        }
        if (!lettersList.includes(letter)){
            lettersList.push(letter)
        }
    })
    
    return repeatedLetters.length
  }
