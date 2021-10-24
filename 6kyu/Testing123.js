var number=function(array){
    let i = 0
    return array.map((item) => {
        i += 1
        return ''+ i + ": " + item
    })
  }
